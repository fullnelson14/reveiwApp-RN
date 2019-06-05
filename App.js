import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import RestaurantList from "components/RestaurantList";
import { css } from "@emotion/native";
import Header from "components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={css`
          flex: 1;
        `}
      >
        <Header />
        <RestaurantList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    paddingTop: 10
  }
});
