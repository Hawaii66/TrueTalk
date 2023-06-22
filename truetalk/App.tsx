import { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import SessinWrapper from "./src/Components/Auth/SessinWrapper";
import FontWrapper from "./src/Components/FontWrapper";
import { GetColor } from "./src/Functions/Color";
import Wrapper from "./src/Pages/Wrapper";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

export default function App() {
  const [loadingFonts, setLoadingFonts] = useState(true);
  const [loadingSession, setLoadingSession] = useState(true);

  const loading = loadingFonts || loadingSession;

  return (
    <PaperProvider theme={MD3LightTheme}>
      <FontWrapper setLoadingFonts={() => setLoadingFonts(false)}>
        <SessinWrapper setLoadingState={(s) => setLoadingSession(s)}>
          {loading ? (
            <View>
              <Text>Laddar</Text>
            </View>
          ) : (
            <Wrapper />
          )}
        </SessinWrapper>
      </FontWrapper>
    </PaperProvider>
  );
}
