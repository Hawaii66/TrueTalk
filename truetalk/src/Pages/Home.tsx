import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuestion } from "../Hooks/useQuestion";
import FText from "../Components/FText";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  List,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import { GetColor, GetTableColor } from "../Functions/Color";

function Home() {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const { mainQuestion } = useQuestion();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ height: "100%", width: "85%" }}>
        <FText
          style={{ fontFamily: "700", fontSize: 24, color: GetColor("black") }}
        >
          {mainQuestion.question.question}
        </FText>
        <ScrollView style={{ paddingRight: 12 }}>
          <View
            style={{
              marginVertical: 8,
              borderRadius: expanded ? 0 : 12,
              overflow: "hidden",
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
            }}
          >
            <List.Accordion
              expanded={expanded}
              onPress={() => setExpanded((s) => !s)}
              title="Write a answer"
              description="Write your answer to the question"
            >
              <Divider horizontalInset bold />
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  overflow: "hidden",
                }}
              >
                <TextInput
                  label={"Answer"}
                  multiline
                  mode="outlined"
                  placeholder="Det var en gång..."
                  selectionColor={GetColor("blue")}
                />
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    maxWidth: "60%",
                  }}
                >
                  <FText style={{ fontFamily: "600" }}>Anonymous</FText>
                  <Checkbox.Android
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => setChecked((s) => !s)}
                    uncheckedColor={GetColor("blue")}
                  />
                </View>
                <Button mode="contained" onPress={() => {}}>
                  Submit
                </Button>
              </View>
            </List.Accordion>
          </View>
          {mainQuestion.answers.map((anser) => {
            return (
              <Card
                mode="outlined"
                key={anser.id}
                style={{
                  minWidth: Dimensions.get("screen").width * 0.85,
                  marginBottom: 8,
                }}
              >
                <Card.Title
                  titleVariant="titleLarge"
                  title={anser.author.username}
                  left={(props) => (
                    <Avatar.Text
                      {...props}
                      size={36}
                      label={anser.author.username.slice(0, 2).toUpperCase()}
                    />
                  )}
                  leftStyle={{ marginLeft: 8 }}
                />
                <Divider horizontalInset={true} bold />
                <Card.Content>
                  <FText
                    style={{
                      fontFamily: "600",
                      color: GetColor("black"),
                      fontSize: 16,
                      minHeight: 16 * 1.5,
                    }}
                  >
                    {anser.text}
                  </FText>
                </Card.Content>
                <Divider horizontalInset={true} bold />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: 2,
                    marginVertical: 4,
                  }}
                >
                  <Button
                    onPress={() => {}}
                    icon="share"
                    mode="text"
                    compact={true}
                  >
                    <FText style={{ fontFamily: "700" }}>Share</FText>
                  </Button>
                  <Button
                    onPress={() => {}}
                    icon="medal"
                    mode="text"
                    compact={true}
                  >
                    <FText style={{ fontFamily: "700" }}>Reward</FText>
                  </Button>
                  <Button
                    onPress={() => {}}
                    icon="thumb-up"
                    mode="text"
                    compact={true}
                    textColor={GetTableColor("red")}
                  >
                    <FText style={{ fontFamily: "700" }}>{anser.likes}</FText>
                  </Button>
                </View>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
