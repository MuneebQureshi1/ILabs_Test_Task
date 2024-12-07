import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import { TextList } from "../../../constants/TextList";

const CalenderScreen = () => {
  return (
    <ScreenContainer HeaderLabel={TextList.Calender}>
      <Text>CalenderScreen</Text>
    </ScreenContainer>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({});
