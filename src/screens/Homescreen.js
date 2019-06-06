import React from "react";
import { StyleSheet, View } from "react-native";
import RestaurantList from "components/RestaurantList";
import { css } from "@emotion/native";
import Header from "components/Header";

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View
        style={css`
          flex: 1;
        `}
      >
        <Header />
        <RestaurantList nav={this.props.navigation} />
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
