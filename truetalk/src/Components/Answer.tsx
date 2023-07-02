import React from "react";
import { Dimensions, View } from "react-native";
import { Card, Avatar, Divider, Button } from "react-native-paper";
import { GetColor, GetTableColor } from "../Functions/Color";
import FText from "./FText";
import { BasicUserAnswer } from "../Interfaces/Answer";

interface Props {
  answer: BasicUserAnswer;
  showUser?: boolean;
}

function Answer({ answer, showUser }: Props) {
  return (
    <Card
      mode="outlined"
      key={answer.id}
      style={{
        minWidth: Dimensions.get("screen").width * 0.85,
        marginBottom: 8,
      }}
    >
      {showUser && (
        <>
          <Card.Title
            titleVariant="titleLarge"
            title={answer.author.username}
            left={(props) => (
              <Avatar.Text
                {...props}
                size={36}
                label={answer.author.username.slice(0, 2).toUpperCase()}
              />
            )}
            leftStyle={{ marginLeft: 8 }}
          />
          <Divider horizontalInset={true} bold />
        </>
      )}
      <Card.Content>
        <FText
          style={{
            fontFamily: "600",
            color: GetColor("black"),
            fontSize: 16,
            minHeight: 16 * 1.5,
          }}
        >
          {answer.text}
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
        <Button onPress={() => {}} icon="share" mode="text" compact={true}>
          <FText style={{ fontFamily: "700" }}>Share</FText>
        </Button>
        <Button onPress={() => {}} icon="medal" mode="text" compact={true}>
          <FText style={{ fontFamily: "700" }}>Reward</FText>
        </Button>
        <Button
          onPress={() => {}}
          icon="thumb-up"
          mode="text"
          compact={true}
          textColor={GetTableColor("red")}
        >
          <FText style={{ fontFamily: "700" }}>{answer.likes}</FText>
        </Button>
      </View>
    </Card>
  );
}

export default Answer;
