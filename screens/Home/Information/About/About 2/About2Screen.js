import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../../styles/styles";

class About2Screen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Go To Detail About Screen"
          onPress={() => this.props.navigation.navigate("DetailAbout2")}
        />
      </View>
    );
  }
}
export default About2Screen;
