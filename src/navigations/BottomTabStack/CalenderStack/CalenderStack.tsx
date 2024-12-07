import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalenderScreen from "../../../screens/CalenderStackScreens/CalenderScreen/CalenderScreen";
import { CalenderStackParamsList } from "../../../models/CalenderStackParamsList";

const CalenderStackNavigator =
  createNativeStackNavigator<CalenderStackParamsList>();

export default function CalenderStack() {
  return (
    <CalenderStackNavigator.Navigator
      initialRouteName="Calender"
      screenOptions={{ headerShown: false }}
    >
      <CalenderStackNavigator.Screen
        name="Calender"
        component={CalenderScreen}
      />
    </CalenderStackNavigator.Navigator>
  );
}
