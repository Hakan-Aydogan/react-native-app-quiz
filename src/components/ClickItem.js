import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from "native-base";

export default class ClickItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.touch}>
        <Text
          style={[styles.click, styles.text]}
          onPress={this.props.onclickEvent}
          title={this.props.title}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  touch: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 15,
  },

  text: {
    fontSize: RFValue(20, 560),
    color: "#fff",
    fontFamily: "sans-serif",

    lineHeight: RFPercentage(4),
    // borderWidth: 0.5,
    // borderRadius: 1,
    borderColor: "#ced4da",
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  click: {
    borderColor: "#c0c0c0",
    borderWidth: 0.5,
    backgroundColor: "#ff8000",
    borderRadius: 5,
    textAlign: "center",
    alignContent: "center",
    color: "#ffffff",
  },
});
