import { StyleSheet, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";

const FeedScreen = () => {
  return (
    <ScreenContainer HeaderLabel={TextList.feed}>
      <Text>FeedScreen</Text>
    </ScreenContainer>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
