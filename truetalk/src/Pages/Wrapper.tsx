import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import FText from "../Components/FText";
import { GetColor } from "../Functions/Color";
import Login from "./Login";
import Home from "./Home";
import Navigation from "./Navigation";
import Screen from "./Screen";

function Wrapper() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user === null ? (
        <Screen>
          <FText
            style={{
              fontFamily: "700",
              color: GetColor("main"),
              fontSize: 24,
            }}
          >
            TrueTalk
          </FText>
          <Login />
        </Screen>
      ) : (
        <Navigation />
      )}
    </>
  );
}

export default Wrapper;
