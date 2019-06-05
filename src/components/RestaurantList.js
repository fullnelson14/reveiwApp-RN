import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import axios from "axios";
import ListRow from "./ListRow";
import { css } from "@emotion/native";

const restaurants = [
  { name: "Bobs burgers", address: "123 Easy Street" },
  { name: "Meemah Cafe", address: "456 Brotha Blvd" },
  { name: "Muffin Man", address: "897 Dreary Ln" },
  { name: "BIRD", address: "654 Yo St" },
  { name: "Yo Street", address: "654 Yo St" },
  { name: "Grubs", address: "123 Easy Street" },
  { name: "Lolo's", address: "456 Brotha Blvd" },
  { name: "Big Poppas", address: "897 Dreary Ln" },
  { name: "Get it cafe", address: "654 Yo St" },
  { name: "YIP", address: "123 Easy Street" },
  { name: "Growl", address: "456 Brotha Blvd" },
  { name: "Arcanine", address: "897 Dreary Ln" },
  { name: "PETS", address: "654 Yo St" },

  { name: "YTR", address: "897 Dreary Ln" },
  { name: "HGF", address: "654 Yo St" },
  { name: "YTP", address: "123 Easy Street" },
  { name: "Jonah J Jameson", address: "456 Brotha Blvd" },
  { name: "XYON", address: "897 Dreary Ln" },
  { name: "GRILLEM", address: "654 Yo St" },
  { name: "Pops Bops", address: "654 Yo St" },
  { name: "Yo Mama", address: "654 Yo St" },
  { name: "Thats uh thats a mamma joke", address: "654 Yo St" }
];

export default class RestaurantList extends Component {
  state = { search: null, temp: null };

  componentDidMount() {
    axios
      .get("https://fcc-weather-api.glitch.me/api/current?lon=-74&lat=40")
      .then(result => this.setState({ temp: result.data.main.temp }));
  }

  render() {
    return (
      <View
        style={css`
          flex: 1;
        `}
      >
        <View>
          <Text>
            Temp in Dover Beaches North:{" "}
            {this.state.temp ? this.state.temp : "Loading..."}
          </Text>
        </View>
        <View style={css``}>
          <TextInput
            placeholder="Live Search"
            style={styles.input}
            onChangeText={text => {
              this.setState({ search: text });
            }}
            value={this.state.search}
          />
        </View>

        <FlatList
          style={css`
            flex: 1;
          `}
          data={restaurants.filter(place => {
            return (
              !this.state.search ||
              place.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => {
            return (
              <ListRow index={index} name={item.name} address={item.address} />
            );
          }}
          keyExtractor={item => item.name}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5"
  }
});
