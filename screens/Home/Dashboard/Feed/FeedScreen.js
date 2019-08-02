import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "../../../../styles/styles";

class FeedScreen extends Component {
  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Button
          title="Go To Detail Feed Screen"
          onPress={() => this.props.navigation.navigate("DetailFeed")}
        />
      </View>
    );
  }
}
export default FeedScreen;
