import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../styles/styles";

class SettingsScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}
export default SettingsScreen;
