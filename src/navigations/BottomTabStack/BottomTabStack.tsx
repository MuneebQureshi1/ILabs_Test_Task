import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../../screens/FeedStackScreens/FeedScreen/FeedScreen";
import FeedStack from "./FeedStack/FeedStack";
import PostStack from "./PostStack/PostStack";
import CalenderStack from "./CalenderStack/CalenderStack";
import SettingStack from "./SettingsStack/SettingStack";
import { BottomTabParamsList } from "../../models/BottomTabStackParamsList";

const BottomTabStackNavigator = createBottomTabNavigator<BottomTabParamsList>();

export default function BottomTabStack() {
  return (
    <BottomTabStackNavigator.Navigator
      initialRouteName="FeedStack"
      screenOptions={{ headerShown: false }}
    >
      <BottomTabStackNavigator.Screen name="FeedStack" component={FeedStack} />
      <BottomTabStackNavigator.Screen name="PostStack" component={PostStack} />
      <BottomTabStackNavigator.Screen
        name="CalenderStack"
        component={CalenderStack}
      />
      <BottomTabStackNavigator.Screen
        name="SettingStack"
        component={SettingStack}
      />
    </BottomTabStackNavigator.Navigator>
  );
}
