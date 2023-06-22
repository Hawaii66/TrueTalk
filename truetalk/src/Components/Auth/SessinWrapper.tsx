import React, { useEffect, useState } from "react";
import { User } from "../../Interfaces/User";
import { useUser } from "../../Hooks/useUser";
import { Alert, View } from "react-native";
import FText from "../FText";
import { GetColor } from "../../Functions/Color";
import { UserContext } from "../../Context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  children: React.ReactNode;
  setLoadingState: (s: boolean) => void;
}

function SessinWrapper({ children, setLoadingState }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");
  const { fetchUser } = useUser();

  const updateUser = async () => {
    const u = await fetchUser();
    if (u) {
      setUser(u);
    }

    setLoadingState(false);
  };

  useEffect(() => {
    updateUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default SessinWrapper;
