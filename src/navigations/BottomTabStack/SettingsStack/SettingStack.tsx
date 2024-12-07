import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../../../screens/SettingStackScreens/SettingScreen/SettingScreen";
import { SettingStackParamslist } from "../../../models/SettingStackParamsList";

const SettingsStackNavigator =
  createNativeStackNavigator<SettingStackParamslist>();

export default function SettingStack() {
  return (
    <SettingsStackNavigator.Navigator
      initialRouteName="Setting"
      screenOptions={{ headerShown: false }}
    >
      <SettingsStackNavigator.Screen name="Setting" component={SettingScreen} />
    </SettingsStackNavigator.Navigator>
  );
}
