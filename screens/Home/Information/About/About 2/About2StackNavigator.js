import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import About2Screen from "./About2Screen";

const About2StackNavigator = createStackNavigator(
  {
    About2: {
      screen: About2Screen,
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

export default About2StackNavigator;
