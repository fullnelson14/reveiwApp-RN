import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styled, { css } from "@emotion/native";

const RestaurantInfoDiv = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: grey;
  margin: 10px;
  border: 1px solid #5d87f9;
`;

const CustomButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: #c93f0b;
  border-radius: 3px;
`;

export default class ListRow extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    return (
      <View
        style={css`
          background-color: ${this.props.index % 2 === 0 ? "#FFF" : "#ffac3a"};
        `}
      >
        <View style={[styles.rowstyle]}>
          <TouchableHighlight
            underlayColor="#5398DC"
            onPress={this.infoPressed}
          >
            <View style={styles.number}>
              <Text>{this.props.index + 1}</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.Shopinfo}>
            <Text> {this.props.name} </Text>
            <Text style={styles.Address}> {this.props.address} </Text>
          </View>
          <View style={styles.infobutton}>
            <CustomButton onPress={this.infoPressed}>
              <Text
                style={css`
                  font-size: 16px;
                `}
              >
                Info
              </Text>
            </CustomButton>
          </View>
        </View>
        <View>
          {this.state.showInfo && (
            <RestaurantInfoDiv>
              <Text>Restaurant Info</Text>
            </RestaurantInfoDiv>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Shopinfo: {
    flex: 8,
    alignItems: "center"
  },
  Address: {
    color: "grey"
  },
  rowstyle: {
    flexDirection: "row",
    padding: 15
  },
  infobutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 50
  },
  number: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 50
  }
});
