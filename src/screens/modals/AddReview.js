import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { css } from "@emotion/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class AddReview extends Component {
  state = {
    name: "",
    rating: 0,
    comment: "",
    submitting: false
  };

  componentDidMount() {
    AsyncStorage.getItem("reviewer_name").then(name => {
      if (name !== null && name !== undefined) {
        this.setState({ name });
      }
    });
  }

  closeOut = () => {
    this.props.navigation.goBack();
  };

  submitReview = () => {
    this.setState({ submitting: true });
    if (this.state.name !== null && this.state.name !== undefined) {
      AsyncStorage.setItem("reviewer_name", this.state.name);
    }

    setTimeout(() => {
      this.props.navigation.goBack();
    }, 2000);
  };

  render() {
    return (
      <View
        style={css`
          flex: 1;
          background-color: rgba(0, 0, 0, 0.3);
        `}
      >
        <View
          style={css`
            border-radius: 14px;
            background-color: #fff;
            margin: 40px;
          `}
        >
          <View
            style={css`
              flex-direction: row;
              justify-content: space-between;
              margin: 5px;
            `}
          >
            <Text> Add a Review here man! </Text>

            <TouchableOpacity
              style={css`
                padding: 5px;
              `}
              onPress={this.closeOut}
            >
              <Icon name="close" color="#0066CC" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Your Name (optional)"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={css`
                background-color: lightcyan;
                margin-bottom: 5px;
                border-bottom-width: 1px;
                border-bottom-color: grey;
              `}
            />
            <Text
              style={css`
                font-size: 30px;
              `}
            >
              Your Rating
            </Text>
            <View
              style={css`
                flex-direction: row;
              `}
            >
              {[1, 2, 3, 4, 5].map(i => {
                return (
                  <TouchableOpacity
                    onPress={() => this.setState({ rating: i })}
                    key={i}
                    style={css`
                      margin: 5px;
                    `}
                  >
                    <Icon
                      name={"star"}
                      color={this.state.rating >= i ? "#ffd64c" : "#CCC"}
                      size={40}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <TextInput
              style={css`
                height: 100px;
                border: 1px solid black;
                margin: 10px;
                background-color: lightgray;
              `}
              value={this.state.comment}
              multiline={true}
              numberOfLines={5}
              onChangeText={comment => this.setState({ comment })}
              placeholder="Leave a review here..."
            />
            {this.state.submitting && (
              <ActivityIndicator size="large" color="#0066CC" />
            )}
            <TouchableOpacity
              style={css`
                padding: 5px;
                align-items: center;
                background-color: cyan;
                border-radius: 10px;
              `}
              onPress={this.submitReview}
              disabled={this.state.submitting}
            >
              <Text
                style={css`
                  text-align: center;
                `}
              >
                Submit Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
