import React, { Component } from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Container, Header, Content, Badge, Text, Icon } from "native-base";
import IconCustom from "react-native-vector-icons/FontAwesome5";

export default class DenemeMainScreen extends Component {
  state = {
    deneme: [
      "aks2019",
      "aks2018",
      "aks2017-12",
      "ebsDeneme2019-1",
      "ebsDeneme2018-11",
      "ebsDeneme2018-11-2",
      "aks2017-03",
      "ebs-book",
    ],
    denemeler: [
      { name: "8 Aralık 2019 AKS ", id: "aks2019-12" },
      { name: "9 Aralık 2018 AKS ", id: "aks2018" },
      { name: "Aralık 2017 AKS ", id: "aks2017-12" },
      { name: "Mart 2017 AKS ", id: "aks2017-03" },
      { name: "Deneme 1 ", id: "ebsDeneme2019-1" },
      { name: "Deneme 2 ", id: "ebsDeneme2018-11" },
      { name: "Deneme 3 ", id: "ebsDeneme2018-11-2" },
      { name: "Deneme 4 ", id: "ebs-book" },
    ],
  };
  renderCategoryItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    const i = String(index);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigate("QuestionDeneme", {
            title: "head",
            catName: item.name,
            specs: item.id,
          })
        }
      >
        <View style={styles.colMain}>
          <View style={styles.col1} />
          <View>
            <Text style={[styles.col2, styles.font]}>{item.name}</Text>
          </View>
          <View style={styles.col3}>
            <Badge
              style={{
                backgroundColor: "#ffff",
                borderWidth: 1,
                borderColor: "#fb6666",
                height: RFValue(15, 560),
                margin: RFValue(2, 560),
                width: RFValue(85, 560),
              }}
              status="error"
            >
              {/* <Text style={styles.Badge}>
                Çözülmedi{" "}
                <IconCustom
                  name={"times"}
                  size={RFValue(15, 600)}
                  color="red"
                />
              </Text> */}
            </Badge>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <FlatList
            data={this.state.denemeler}
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
    color: "#fb6666",
    fontFamily: "sans-serif",
    fontSize: RFValue(10, 560),
    lineHeight: RFPercentage(2),
    // padding: RFPercentage(1),
    // margin: RFPercentage(1),
  },
  colMain: {
    flexDirection: "row",
    flex: 10,
    justifyContent: "space-between",
  },
  font: {
    fontSize: RFValue(15, 560),
    color: "#666666",
    fontFamily: "sans-serif",
    lineHeight: RFPercentage(4),
  },
});
