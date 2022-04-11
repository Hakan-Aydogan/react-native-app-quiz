import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import homePage from "../../data/homePage";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import IconCustom from "react-native-vector-icons/FontAwesome";
import book from "../images/book.png";
import test from "../images/test.png";
import random from "../images/random.png";
import deneme from "../images/deneme.png";
import noteShort from "../images/noteShort.png";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
  renderCategoryItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    const i = String(index);
    const imageArray = [test, book, noteShort, deneme, random];

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigate(item.nav, {
            tip: item.tip,
            id: item.id,
            catName: item.catName,
            random: item.random,
          })
        }
      >
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "space-around",
            //paddingBottom: 100,
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={imageArray[index]} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={homePage}
            renderItem={this.renderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    backgroundColor: "#ffffff",
    borderColor: "#e2e2e2",
    borderRadius: 3,
    borderWidth: 1,
  },
  image: {
    width: RFPercentage(15),
    height: RFPercentage(15),
  },
  text: {
    fontSize: RFPercentage(3),
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: RFPercentage(5),
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
