import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { css } from "@emotion/native";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={css`
          background-color: orange;
          padding: 30px 0;
        `}
      >
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          Raving Reviews
        </Text>
        <Text style={{ textAlign: "center" }}>Happy Eating.</Text>
      </View>
    );
  }
}
