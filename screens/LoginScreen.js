import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../styles/styles";

class LoginScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
export default LoginScreen;
