import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import ProfileScreen from "./ProfileScreen";
import DetailProfileScreen from "./DetailProfileScreen";

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Profile",
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
    DetailProfile: {
      screen: DetailProfileScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detail Profile"
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

export default ProfileStackNavigator;
