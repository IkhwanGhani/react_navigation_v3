import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createBottomTabNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FeedStackNavigator from "./Feed/FeedStackNavigator";
import ProfileStackNavigator from "./Profile/ProfileStackNavigator";
import SettingsStackNavigator from "./Settings/SettingsStackNavigator";

const DashboardTabNavigator = createBottomTabNavigator(
  {
    FeedStack: {
      screen: FeedStackNavigator,
      navigationOptions: {
        tabBarLabel: "Feed",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="feed" color={tintColor} size={24} />
        )
      }
    },
    ProfileStack: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="profile" color={tintColor} size={24} />
        )
      }
    },
    SettingsStack: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#6200ee",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#bb86fc",
        borderTopWidth: 2,
        borderTopColor: "#6200ee"
      }
    }
  }
);

export default DashboardTabNavigator;
