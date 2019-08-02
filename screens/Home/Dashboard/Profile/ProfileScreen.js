import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../styles/styles";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Go To Detail Profile Screen"
          onPress={() => this.props.navigation.navigate("DetailProfile")}
        />
      </View>
    );
  }
}
export default ProfileScreen;
