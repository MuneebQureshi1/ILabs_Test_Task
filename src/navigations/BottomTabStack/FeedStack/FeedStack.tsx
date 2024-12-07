import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../../../screens/FeedStackScreens/FeedScreen/FeedScreen";
import { FeedStackParamsList } from "../../../models/FeedStackParamsList";

const FeedStackNavigator = createNativeStackNavigator<FeedStackParamsList>();

export default function FeedStack() {
  return (
    <FeedStackNavigator.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <FeedStackNavigator.Screen name="Feed" component={FeedScreen} />
    </FeedStackNavigator.Navigator>
  );
}
