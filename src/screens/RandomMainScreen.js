import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default class RandomMainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() =>
          navigate("QuestionRandom", {
            title: "head",
            catName: "Karışık Sorular",
            random: "random",
            tip: "random",
          })
        }
      >
        <View catId="short-notes" style={styles.item}>
          <Text style={styles.title}>Karışık Sorular</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // eslint-disable-next-line no-undef
    marginTop: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: RFValue(20, 560),
  },
});
