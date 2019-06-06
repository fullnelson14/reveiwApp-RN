import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class About extends Component {
  render() {
    return (
      <View>
        <Icon name="car" color="#0066cc" size={100} />

        <Text> ABOUT US! </Text>
      </View>
    );
  }
}
