import React, { Ref } from "react";
import { StyleProp, TextStyle, Text, LayoutChangeEvent } from "react-native";
import { FontFamily, FontFamilyToFont } from "./FontWrapper";

interface Props {
  children: React.ReactNode;
  style:
    | Omit<StyleProp<TextStyle>, FontFamily>
    | {
        fontFamily: FontFamily;
      };
  ref?: Ref<Text>;
  onLayout?: (e: LayoutChangeEvent) => void;
  numberOfLines?: number;
}

function FText({ children, style, numberOfLines, ref, onLayout }: Props) {
  return (
    <Text
      onLayout={onLayout}
      ref={ref}
      style={{
        ...style,
        fontFamily: FontFamilyToFont((style as any).fontFamily),
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}

export default FText;
