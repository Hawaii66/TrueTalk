import React, { useCallback, useEffect } from "react";
import { Text } from "react-native";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";

export type FontFamily =
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export const FontFamilyToFont = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case "200":
      return "Nunito_200ExtraLight";
    case "300":
      return "Nunito_300Light";
    case "400":
      return "Nunito_400Regular";
    case "500":
      return "Nunito_500Medium";
    case "600":
      return "Nunito_600SemiBold";
    case "700":
      return "Nunito_700Bold";
    case "800":
      return "Nunito_800ExtraBold";
    case "900":
      return "Nunito_900Black";
  }
};

interface Props {
  children: React.ReactNode;
  setLoadingFonts: (s: boolean) => void;
}

function FontWrapper({ children, setLoadingFonts }: Props) {
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });
  const [fontsMustLoaded] = useFonts({
    Nunito_900Black,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setLoadingFonts(false);
    }
  }, [fontsLoaded]);
  if (!fontsMustLoaded) {
    return <></>;
  }

  return <>{children}</>;
}
export default FontWrapper;
