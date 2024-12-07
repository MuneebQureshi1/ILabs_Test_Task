import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";

const PostScreen = () => {
  return (
    <ScreenContainer HeaderLabel={TextList.posts}>
      <Text>PostScreen</Text>
    </ScreenContainer>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
