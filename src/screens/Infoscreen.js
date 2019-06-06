import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled, { css } from "@emotion/native";

import Stars from "components/Stars";

const Container = styled.ScrollView`
  flex: 1;
  background-color: lightgray;
`;

const InfoHeader = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export default class Infoscreen extends Component {
  static navigationOptions = {
    title: "Restaurant Info"
  };

  addReview = () => {
    this.props.navigation.navigate("AddReview");
  };

  render() {
    const place = this.props.navigation.getParam("place");

    return (
      <Container>
        <InfoHeader>
          <Image
            source={{
              uri: "https://source.unsplash.com/random/100x100"
            }}
          />
          <View>
            <Text
              style={css`
                font-size: 20px;
              `}
            >
              {place.name}
            </Text>
            <Text>{place.address}</Text>
            <Stars rating={place.rating} />
            <TouchableOpacity
              style={css`
                border: 1px solid #0066cc;
                border-radius: 14px;
                padding: 3px 10px;
                margin-top: 10px;
              `}
              onPress={this.addReview}
            >
              <Text
                style={css`
                  text-align: center;
                `}
              >
                Add Review
              </Text>
            </TouchableOpacity>
          </View>
        </InfoHeader>
      </Container>
    );
  }
}
