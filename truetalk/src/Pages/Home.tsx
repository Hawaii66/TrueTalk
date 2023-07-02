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
import Answer from "../Components/Answer";

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
          {mainQuestion.answers.map((answer) => {
            return <Answer showUser answer={answer} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
