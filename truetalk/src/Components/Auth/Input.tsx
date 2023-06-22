import React from "react";
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  InputModeOptions,
  Dimensions,
} from "react-native";
import FText from "../FText";
import { GetColor } from "../../Functions/Color";

interface Props {
  title: string;
  text: string;
  setText: (s: string) => void;
  type: KeyboardTypeOptions;
  inputMode: InputModeOptions;
  onEnd?: () => void;
}

function Input({ title, text, setText, type, inputMode, onEnd }: Props) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 4,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <FText
        style={{
          minWidth: "30%",
          maxWidth: "30%",
          fontFamily: "700",
          color: GetColor("red"),
          fontSize: 24,
        }}
      >
        {title}
      </FText>
      <TextInput
        inputMode={inputMode}
        maxLength={50}
        autoCapitalize="none"
        autoComplete={inputMode === "email" ? "email" : undefined}
        autoCorrect={false}
        style={{
          flexGrow: 1,
          maxWidth: "70%",
          fontSize: 24,
          color: GetColor("black"),
          backgroundColor: GetColor("white"),
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderWidth: 1,
          borderColor: GetColor("black"),
          borderStyle: "solid",
          borderRadius: 8,
        }}
        keyboardType={type}
        value={text}
        onChangeText={(e) => setText(e)}
        onEndEditing={onEnd}
        secureTextEntry={inputMode === "email" ? false : true}
      />
    </View>
  );
}

export default Input;
