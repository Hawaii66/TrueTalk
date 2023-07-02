import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { SafeAreaView, ScrollView, View } from "react-native";
import FText from "../Components/FText";
import { GetColor } from "../Functions/Color";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Checkbox,
  Divider,
  List,
} from "react-native-paper";
import { PrivateAnswer } from "../Interfaces/Answer";
import Answer from "../Components/Answer";
import { useUser } from "../Hooks/useUser";

function User() {
  const { user, signOut } = useContext(UserContext);
  const [answers, setAnswers] = useState<PrivateAnswer[]>([]);
  const [showAnonymous, setShowAnonymous] = useState(false);
  const [loadingAnswers, setLoadingAnswers] = useState(true);

  const { getMyAnswers } = useUser();

  const getAnswers = async () => {
    const data = await getMyAnswers();
    if (data === null) {
      setLoadingAnswers(false);
      setAnswers([]);
      return;
    }

    setAnswers(data);
    setLoadingAnswers(false);
  };

  useEffect(() => {
    getAnswers();
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 8,
            paddingHorizontal: 24,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", gap: 12, flexDirection: "row" }}>
            <Avatar.Text
              size={36}
              label={user.username.slice(0, 2).toUpperCase()}
            />
            <FText
              style={{
                fontFamily: "800",
                color: GetColor("black"),
                fontSize: 24,
              }}
            >
              {user.username}
            </FText>
          </View>
          <Button onPress={signOut} icon="logout" mode="contained">
            Sign out
          </Button>
        </View>
        <Divider bold horizontalInset />
        <View style={{ display: "flex", alignItems: "center" }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              maxWidth: "60%",
            }}
          >
            <FText style={{ fontFamily: "600" }}>Show Anonymous</FText>
            <Checkbox.Android
              status={showAnonymous ? "checked" : "unchecked"}
              onPress={() => setShowAnonymous((s) => !s)}
              uncheckedColor={GetColor("blue")}
            />
          </View>
          <ScrollView style={{ width: "85%" }}>
            {loadingAnswers && <ActivityIndicator animating size={"large"} />}
            {answers
              .filter((i) => showAnonymous || !i.anonymous)
              .map((answer) => (
                <Answer
                  showUser
                  key={answer.id}
                  answer={{
                    author: {
                      id: user.id,
                      username: answer.anonymous
                        ? "?"
                        : user.username.slice(0, 2).toUpperCase(),
                    },
                    id: answer.id,
                    likes: answer.likes,
                    text: answer.text,
                  }}
                />
              ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default User;
