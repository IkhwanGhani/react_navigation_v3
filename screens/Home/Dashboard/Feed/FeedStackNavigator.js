import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import FeedScreen from "./FeedScreen";
import DetailFeedScreen from "./DetailFeedScreen";

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Feed",
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
    DetailFeed: {
      screen: DetailFeedScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detail Feed"
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
FeedStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default FeedStackNavigator;
