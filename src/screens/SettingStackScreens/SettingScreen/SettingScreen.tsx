import { StyleSheet, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";

const SettingScreen = () => {
  return (
    <ScreenContainer HeaderLabel={TextList.Settings}>
      <Text>SettingScreen</Text>
    </ScreenContainer>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
