import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import AboutTopTabNavigator from "./AboutTopTabNavigator";
import DetailAbout1Screen from "./About 1/DetailAbout1Screen";
import DetailAbout2Screen from "./About 2/DetailAbout2Screen";

const AboutStackNavigator = createStackNavigator({
  AboutTopTab: {
    screen: AboutTopTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: "About",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="feed" color={tintColor} size={24} />
        ),
        headerTitle: "About",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  },
  DetailAbout1: {
    screen: DetailAbout1Screen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Detail About 1"
      };
    }
  },
  DetailAbout2: {
    screen: DetailAbout2Screen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Detail About 2"
      };
    }
  }
});
AboutStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default AboutStackNavigator;
