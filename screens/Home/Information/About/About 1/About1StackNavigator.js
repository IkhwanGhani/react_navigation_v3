import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import About1Screen from "./About1Screen";

const About1StackNavigator = createStackNavigator(
  {
    About1: {
      screen: About1Screen,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      gestureEnabled: false
    }
  }
);

export default About1StackNavigator;
