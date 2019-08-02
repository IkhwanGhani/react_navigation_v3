import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../styles/styles";

class DetailProfileScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Text style={[mainStyle.text, mainStyle.caption]}>
          Detail Profile Screen
        </Text>
      </View>
    );
  }
}
export default DetailProfileScreen;
