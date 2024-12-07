import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStack from "./FeedStack/FeedStack";
import PostStack from "./PostStack/PostStack";
import CalenderStack from "./CalenderStack/CalenderStack";
import SettingStack from "./SettingsStack/SettingStack";
import { BottomTabParamsList } from "../../models/BottomTabStackParamsList";
import CustomTabBarIcon from "../../components/CustomBottomBarIcon.tsx/CustomBottomBarIcon";
import { svg } from "../../constants/svg";
import { Theme } from "../../constants/Theme";
import { globalStyle } from "../../globalStyles/globalStyles";
import { TextList } from "../../constants/TextList";

const BottomTabStackNavigator = createBottomTabNavigator<BottomTabParamsList>();

export default function BottomTabStack() {
  return (
    <BottomTabStackNavigator.Navigator
      initialRouteName="FeedStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: [globalStyle.bottomBarStlye],
      }}
    >
      <BottomTabStackNavigator.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          tabBarLabel: TextList.feed,
          tabBarActiveTintColor: Theme.bottomBarActiveText,
          tabBarInactiveTintColor: Theme.bottomBarInactiveText,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              selectedIcon={svg.activeFeedIcon}
              unselectedIcon={svg.InActiveFeedIcon}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="PostStack"
        component={PostStack}
        options={{
          tabBarLabel: TextList.posts,
          tabBarActiveTintColor: Theme.bottomBarActiveText,
          tabBarInactiveTintColor: Theme.bottomBarInactiveText,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              selectedIcon={svg.activePostIcon}
              unselectedIcon={svg.InActivePostIcon}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="CalenderStack"
        component={CalenderStack}
        options={{
          tabBarLabel: TextList.Calender,
          tabBarActiveTintColor: Theme.bottomBarActiveText,
          tabBarInactiveTintColor: Theme.bottomBarInactiveText,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              selectedIcon={svg.activeCalenderIcon}
              unselectedIcon={svg.InActiveCalenderIcon}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarLabel: TextList.Settings,
          tabBarActiveTintColor: Theme.bottomBarActiveText,
          tabBarInactiveTintColor: Theme.bottomBarInactiveText,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              selectedIcon={svg.activeSettingsIcon}
              unselectedIcon={svg.InActiveSettingsIcon}
            />
          ),
        }}
      />
    </BottomTabStackNavigator.Navigator>
  );
}
