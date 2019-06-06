import React, { Component } from "react";
import { View } from "react-native";
import { css } from "@emotion/native";

import Icon from "react-native-vector-icons/FontAwesome";

const Stars = ({ rating }) => {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View
      style={css`
        flex-direction: row;
      `}
    >
      {stars.map((e, index) => {
        const name = Math.floor(rating) > index ? "star" : "star-half";
        return <Icon key={index} name={name} color="#ffd64c" />;
      })}
    </View>
  );
};

export default Stars;
