import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../styles/styles";

class ContactsScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Go To Detail Contacts Screen"
          onPress={() => this.props.navigation.navigate("DetailContacts")}
        />
      </View>
    );
  }
}
export default ContactsScreen;
