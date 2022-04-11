import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Item,
  ScrollView,
} from "react-native";
import testCategories from "../../data/testCategories";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Container, Header, Content, Badge, Text, Icon } from "native-base";
import IconCustom from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-community/async-storage";
import { array } from "yup";

export default class TestScreen extends Component {
  state = { trueCount: [], falseCount: [] };
  componentDidMount = async () => {
    const array = testCategories;
    let data;
    await array.forEach((element) => {
      this.getCountsFromStorage(element.catId).then((res) => {
        this.state.trueCount.push(res.trueCount);
        this.state.falseCount.push(res.falseCount);
      });
    });
    console.log(AsyncStorage.getAllKeys());
  };
  getCountsFromStorage = async (catId) => {
    let trueCount = 0;
    let falseCount = 0;

    await AsyncStorage.getItem(JSON.stringify(parseInt(catId) + 1111)).then(
      (res) => (trueCount = res)
    );
    await AsyncStorage.getItem(JSON.stringify(parseInt(catId) + 2222)).then(
      (res) => (falseCount = res)
    );

    return await { trueCount, falseCount };
  };
  renderCategoryItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    const i = String(index);
    let trueCount = this.state.trueCount[index];
    let falseCount = this.state.falseCount[index];
    // console.log(trueCount, falseCount);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigate("Question", {
            title: "head",
            catName: item.catName,
            id: item.catId,
          })
        }
      >
        <View style={styles.colMain}>
          <View style={styles.col1} />
          <View style={styles.row1}>
            <View>
              <Text style={[styles.col2, styles.font]}>{item.catName}</Text>
            </View>
            <View style={styles.col3}>
              {/* <Badge
                style={{
                  backgroundColor: "#ffff",
                  borderWidth: 1,
                  borderColor: "purple",
                }}
              >
                <Text style={styles.Badge}> Soru Sayısı</Text>
              </Badge> */}

              <Badge
                style={{
                  backgroundColor: "#ffff",
                  borderWidth: 1,
                  borderColor: "#fb6666",
                  height: RFValue(25, 560),
                  margin: RFValue(1, 560),
                }}
              >
                <Text style={styles.Badge}>
                  <IconCustom
                    name={"check"}
                    size={RFValue(15, 600)}
                    color="#20d2bb"
                  />{" "}
                  {trueCount !== null ? trueCount : 0}
                </Text>
              </Badge>

              <Badge
                style={{
                  backgroundColor: "#ffff",
                  borderWidth: 1,
                  borderColor: "#fb6666",
                  height: RFValue(25, 560),
                  margin: RFValue(1, 560),
                }}
              >
                <Text style={styles.Badge}>
                  <IconCustom
                    name={"times"}
                    size={RFValue(15, 600)}
                    color="red"
                  />{" "}
                  {falseCount !== null ? falseCount : 0}
                </Text>
              </Badge>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={testCategories}
          renderItem={this.renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
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
  row1: {
    flexDirection: "column",
  },
  col1: {
    backgroundColor: "#5efc03",
    width: RFValue(10, 560),
    // height: RFValue(45, 560),
  },
  col2: {
    paddingHorizontal: 10,
    margin: 10,
  },
  col3: {
    padding: 10,
    marginLeft: 5,
    //  backgroundColor: '#ff00ff',
    width: RFValue(95, 560),
    flexDirection: "row",
    alignContent: "space-around",
  },
  Badge: {
    color: "#666666",
    fontFamily: "sans-serif",
    fontSize: RFValue(15, 560),
    lineHeight: RFPercentage(2),
    padding: RFPercentage(1),
    margin: RFPercentage(1),
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
