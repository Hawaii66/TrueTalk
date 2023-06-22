import React from "react";
import { View, Dimensions } from "react-native";
import { GetColor } from "../Functions/Color";

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        backgroundColor: GetColor("white"),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}

export default Screen;
