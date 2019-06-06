import React from "react";
import { Text, View, Image } from "react-native";
import { css } from "@emotion/native";
import boxImage from "images/EGH_ReactTakeoutbox_.png";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={css`
          background-color: orange;
          padding: 30px 0;
        `}
      >
        <View
          style={css`
            align-items: center;
          `}
        >
          <Image
            source={boxImage}
            style={css`
              height: 100px;
              width: 100px;
            `}
          />
        </View>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          Raving Reviews
        </Text>
        <Text style={{ textAlign: "center" }}>Happy Eating.</Text>
      </View>
    );
  }
}
