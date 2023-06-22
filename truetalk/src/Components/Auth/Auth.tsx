import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { Alert, TouchableOpacity, View } from "react-native";
import FText from "../FText";
import { GetColor } from "../../Functions/Color";
import { API_ROUTE } from "../../Functions/API";
import { UserContext } from "../../Context/UserContext";
import { useFetch } from "../../Hooks/useFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  text: "Logga in" | "Skapa konto";
  goBack: () => void;
}

function Auth({ text, goBack }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { makePost } = useFetch();
  const { setToken } = useContext(UserContext);

  const fixToken = async (url: string) => {
    const result = await makePost<
      { token: string },
      { email: string; password: string }
    >(url, {
      email,
      password,
    });

    if (result) {
      await AsyncStorage.setItem("token", result.token);
      setToken(result.token);

      return result.token;
    } else {
      Alert.alert("Error", "Cant get/create user");
      setError("Error: Cant get/create user");
    }
  };

  const signIn = async () => {
    await fixToken("/auth/login");
  };

  const signUp = async () => {
    await fixToken("/auth/create");
  };

  return (
    <View
      style={{
        width: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        text={email}
        setText={setEmail}
        title="Email"
        type="email-address"
        inputMode="email"
      />
      <Input
        text={password}
        setText={setPassword}
        title="Lösenord"
        type="default"
        inputMode="text"
      />
      {error !== "" && (
        <FText
          style={{
            fontFamily: "600",
            color: GetColor("black"),
          }}
        >
          {error}
        </FText>
      )}
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View style={{ marginHorizontal: "10%" }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: GetColor("red"),
            }}
            onPress={goBack}
          >
            <FText
              style={{
                fontFamily: "900",
                fontSize: 24,
                color: GetColor("red"),
              }}
            >
              Tillbaka
            </FText>
          </TouchableOpacity>
        </View>
        <View style={{ minWidth: "20%" }} />
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 10,
            borderWidth: 1,
            width: "50%",
            borderColor: GetColor("red"),
          }}
          onPress={() => {
            text === "Logga in" ? signIn() : signUp();
          }}
        >
          <FText
            style={{
              fontFamily: "900",
              fontSize: 24,
              color: GetColor("red"),
            }}
          >
            {text}
          </FText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Auth;
