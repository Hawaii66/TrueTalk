import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import FText from "../FText";
import { GetColor } from "../../Functions/Color";
import Auth from "./Auth";

function ChooseFlow() {
  const [state, setState] = useState<"Choose" | "Login" | "Create">("Choose");

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {state === "Choose" && (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            gap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 6,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: GetColor("red"),
            }}
            onPress={() => setState("Login")}
          >
            <FText
              style={{
                fontFamily: "800",
                color: GetColor("red"),
                fontSize: 36,
              }}
            >
              Logga in
            </FText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 6,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: GetColor("red"),
            }}
            onPress={() => setState("Create")}
          >
            <FText
              style={{
                fontFamily: "800",
                color: GetColor("red"),
                fontSize: 36,
              }}
            >
              Skapa konto
            </FText>
          </TouchableOpacity>
        </View>
      )}
      {state === "Create" && (
        <Auth goBack={() => setState("Choose")} text="Skapa konto" />
      )}
      {state === "Login" && (
        <Auth goBack={() => setState("Choose")} text="Logga in" />
      )}
    </View>
  );
}

export default ChooseFlow;
