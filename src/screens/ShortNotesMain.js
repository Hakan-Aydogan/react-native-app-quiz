import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
//import shortNotesCategories from '../../data/shortNotesCategories';
import { RFValue } from "react-native-responsive-fontsize";
import getData from "../helper/getData";

export default class ShortNotesMain extends Component {
  state = {
    index: 0,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigate("NotesShort", {
            title: "head",
            catName: "Kısa Notlar",
            id: "short-notes",
            tip: "short",
            index: this.state.index,
          })
        }
      >
        <View catId="short-notes" style={styles.item}>
          <Text style={styles.title}>BAŞLA</Text>
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
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#ffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#6666",
  },
  title: {
    fontSize: RFValue(20, 560),
  },
});
