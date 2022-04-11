import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import noteCategories from "../../data/noteCategories";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Container, Header, Content, Badge, Text, Icon } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class NotesMainScreen extends Component {
  renderCategoryItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigate("Notes", {
            title: "head",
            catName: item.catName,
            id: item.catId,
            tip: "long",
          })
        }
      >
        <View style={styles.colMain}>
          <View style={styles.col1} />
          <View>
            <Text style={[styles.col2, styles.font]}>{item.catName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={noteCategories}
            renderItem={this.renderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </ScrollView>
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
    backgroundColor: "#ffff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: RFValue(15, 560),
  },
  item: {
    margin: 5,
    backgroundColor: "#ffffff",
    borderColor: "#e2e2e2",
    borderRadius: 3,
    borderWidth: 1,
  },
  col1: {
    backgroundColor: "#5efc03",
    width: RFValue(10, 560),
    // height: RFValue(45, 560),
  },
  col2: {
    paddingHorizontal: 25,
    margin: 15,
  },
  col3: {
    padding: 20,
    marginLeft: 5,
    //  backgroundColor: '#ff00ff',
    width: RFValue(95, 560),
  },
  Badge: {
    color: "#666666",
    fontFamily: "sans-serif",
    fontSize: RFValue(10, 560),
    lineHeight: RFPercentage(4),
    padding: 10,
  },
  colMain: {
    flexDirection: "row",
    flex: 10,
    justifyContent: "flex-start",
  },
  font: {
    fontSize: RFValue(15, 560),
    color: "#666666",
    fontFamily: "sans-serif",
    lineHeight: RFPercentage(4),
  },
});
