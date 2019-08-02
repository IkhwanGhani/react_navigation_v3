import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
//https://reactnavigation.org/en/
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import AppDrawerNavigator from "./screens/Home/AppDrawerNavigator";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
