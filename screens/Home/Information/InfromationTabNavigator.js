import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import AboutStackNavigator from "./About/AboutStackNavigator";
import ContactsStackNavigator from "./Contacts/ContactsStackNavigator";

const InfromationTabNavigator = createMaterialBottomTabNavigator(
  {
    AboutStack: {
      screen: AboutStackNavigator,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="feed" color={tintColor} size={24} />
        )
      }
    },
    ContactsStack: {
      screen: ContactsStackNavigator,
      navigationOptions: {
        tabBarLabel: "Contacts",
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="profile" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    shifting: true,
    activeColor: "#fff",
    inactiveColor: "#6200ee",
    barStyle: { backgroundColor: "#bb86fc" }
  }
);

export default InfromationTabNavigator;
