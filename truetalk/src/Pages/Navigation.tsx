import React from "react";
import { Dimensions, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import FText from "../Components/FText";
import Home from "./Home";
import { GetColor } from "../Functions/Color";
import Screen from "./Screen";

function Navigation() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home" },
    { key: "user", title: "User", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => (
      <Screen>
        <Home />
      </Screen>
    ),
    user: () => (
      <Screen>
        <View>
          <FText style={{ fontFamily: "800" }}>User</FText>
        </View>
      </Screen>
    ),
  });

  return (
    <BottomNavigation
      shifting
      compact
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        marginBottom: 0,
        paddingBottom: 12,
        height: 12 + 12 * 6,
      }}
    />
  );
}

export default Navigation;
