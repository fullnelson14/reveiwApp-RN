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
  { rating: 3, name: "Bobs burgers", address: "123 Easy Street" },
  { rating: 4.5, name: "Meemah Cafe", address: "456 Brotha Blvd" },
  { rating: 5, name: "Muffin Man", address: "897 Dreary Ln" },
  { rating: 1, name: "BIRD", address: "654 Yo St" },
  { rating: 3, name: "Yo Street", address: "654 Yo St" },
  { rating: 2, name: "Grubs", address: "123 Easy Street" },
  { rating: 3.5, name: "Lolo's", address: "456 Brotha Blvd" },
  { rating: 3, name: "Big Poppas", address: "897 Dreary Ln" },
  { rating: 3, name: "Get it cafe", address: "654 Yo St" },
  { rating: 3, name: "YIP", address: "123 Easy Street" },
  { rating: 3, name: "Growl", address: "456 Brotha Blvd" },
  { rating: 3, name: "Arcanine", address: "897 Dreary Ln" },
  { rating: 3, name: "PETS", address: "654 Yo St" },
  { rating: 3, name: "YTR", address: "897 Dreary Ln" },

  { rating: 3, name: "HGF", address: "654 Yo St" },
  { rating: 3, name: "YTP", address: "123 Easy Street" },
  { rating: 3.5, name: "Jonah J Jameson", address: "456 Brotha Blvd" },
  { rating: 4.5, name: "XYON", address: "897 Dreary Ln" },
  { rating: 3, name: "GRILLEM", address: "654 Yo St" },
  { rating: 3, name: "Pops Bops", address: "654 Yo St" },
  { rating: 2, name: "Yo Mama", address: "654 Yo St" },
  { rating: 4, name: "Thats uh thats a mamma joke", address: "654 Yo St" }
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
              <ListRow
                index={index}
                name={item.name}
                address={item.address}
                rating={item.rating}
                nav={this.props.nav}
              />
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
