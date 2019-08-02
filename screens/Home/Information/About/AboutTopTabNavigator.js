import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createMaterialTopTabNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// TODO: Custom Swipe Tab in this Navigator

import About1StackNavigator from "./About 1/About1StackNavigator";
import About2StackNavigator from "./About 2/About2StackNavigator";

const AboutTopTabNavigator = createMaterialTopTabNavigator(
  {
    About1Stack: {
      screen: About1StackNavigator,
      navigationOptions: {
        tabBarLabel: "About 1"
      }
    },
    About2Stack: {
      screen: About2StackNavigator,
      navigationOptions: {
        tabBarLabel: "About 2"
      }
    }
  },
  {}
);

export default AboutTopTabNavigator;
