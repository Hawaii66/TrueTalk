import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../Interfaces/User";
import { useFetch } from "./useFetch";
import { PrivateAnswer } from "../Interfaces/Answer";

export const useUser = () => {
  const { makeAuthedGet, makePost } = useFetch();

  const fetchUser = async (): Promise<User | null> => {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      return null;
    }

    const user = await makeAuthedGet<User>("/authed/me", token);

    return user;
  };

  const getMyAnswers = async (): Promise<PrivateAnswer[] | null> => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      return null;
    }
    const data = await makeAuthedGet<PrivateAnswer[]>(
      "/authed/me/answers",
      token
    );

    return data;
  };

  const getToken = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    const data = await makePost<
      { token: string },
      { email: string; password: string }
    >("/auth/login", {
      email,
      password,
    });

    return data ? data.token : null;
  };

  return {
    fetchUser,
    getToken,
    getMyAnswers,
  };
};
