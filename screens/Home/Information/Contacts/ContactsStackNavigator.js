import React, { Component } from "react";
//https://reactnavigation.org/en/
import { createStackNavigator } from "react-navigation";
//https://github.com/oblador/react-native-vector-icons & https://oblador.github.io/react-native-vector-icons/
import Icon from "react-native-vector-icons/Ionicons";

import ContactsScreen from "./ContactsScreen";
import DetailContactsScreen from "./DetailContactsScreen";

const ContactsStackNavigator = createStackNavigator(
  {
    Contacts: {
      screen: ContactsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Contacts",
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
    DetailContacts: {
      screen: DetailContactsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detail Contacts"
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
ContactsStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default ContactsStackNavigator;
