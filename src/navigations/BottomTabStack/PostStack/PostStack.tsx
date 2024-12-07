import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../../../screens/PostStackScreens/PostScreen/PostScreen";
import { PostStackParamsList } from "../../../models/PostStackParamsList";

const PostStackNavigator = createNativeStackNavigator<PostStackParamsList>();

export default function PostStack() {
  return (
    <PostStackNavigator.Navigator
      initialRouteName="Post"
      screenOptions={{ headerShown: false }}
    >
      <PostStackNavigator.Screen name="Post" component={PostScreen} />
    </PostStackNavigator.Navigator>
  );
}
