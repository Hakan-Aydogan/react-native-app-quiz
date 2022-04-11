import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { SafeAreaContext } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import testCategories from "../../data/testCategories";
import Carousel from "react-native-snap-carousel";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from "native-base";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class AddStorageScreen extends Component {
  state = {
    totalTrue: 0,
    totalFalse: 0,
    percentageTrue: 0,
    percentageFalse: 0,
    trueArr: [],
    falseArr: [],
    screenWidth: 0,
  };

  componentDidMount = async () => {
    await this.getDataFromStorage();
    const screenWidth = Math.round(Dimensions.get("window").width);
    this.setState({ screenWidth: screenWidth });
  };

  percentageCalc = (num1, num2) => {
    return Math.round((num1 / (num1 + num2)) * 100);
  };

  getDataFromStorage = async () => {
    const array = await testCategories;
    let totalTrue = await 0;
    let totalFalse = await 0;
    let truePer = 0;
    let falsePer = 0;
    await array.forEach((element) => {
      AsyncStorage.getItem(JSON.stringify(parseInt(element.catId) + 2222)).then(
        (res) => {
          res !== null
            ? ((totalFalse = totalFalse + parseInt(res)),
              (falsePer = parseInt(res)))
            : totalFalse;
          let per = this.percentageCalc(totalTrue, totalFalse);
          this.setState({ totalFalse: totalFalse, percentageTrue: per });
          this.state.falseArr.push(parseInt(res));
        }
      );
      AsyncStorage.getItem(JSON.stringify(parseInt(element.catId + 1111))).then(
        (res) => {
          res !== null
            ? ((totalTrue = totalTrue + parseInt(res)),
              (truePer = parseInt(res)))
            : totalTrue;
          let per = this.percentageCalc(totalFalse, totalTrue);
          this.setState({ totalTrue: totalTrue, percentageFalse: per });
          this.state.trueArr.push(parseInt(res));
        }
      );
    });
  };

  RenderChart = () => {
    let truePer = Math.round(
      (this.state.totalTrue / (this.state.totalTrue + this.state.totalFalse)) *
        100
    );
    let falsePer = Math.round(
      (this.state.totalFalse / (this.state.totalTrue + this.state.totalFalse)) *
        100
    );
    if (Number.isNaN(truePer)) {
      truePer = 0;
    }
    if (Number.isNaN(falsePer)) {
      falsePer = 0;
    }
    const data = [
      {
        name: "% Doğru",
        population: truePer,
        color: "#20d2bb",
        legendFontColor: "#7F7F7F",
        legendFontSize: RFValue(15),
      },
      {
        name: "% Yanlış",
        population: falsePer,
        color: "#fb6666",
        legendFontColor: "#7F7F7F",
        legendFontSize: RFValue(15),
      },
    ];
    return (
      <ScrollView>
        <View>
          <PieChart
            data={data}
            width={this.state.screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </ScrollView>
    );
  };

  _renderItem = ({ item, index }) => {
    const trueArr = this.state.trueArr;
    const falseArr = this.state.falseArr;
    return (
      <Card style={styles.card}>
        <CardItem header>
          <Text style={styles.text}>{item.catName}</Text>
        </CardItem>
        <CardItem footer style={styles.itemFooter}>
          <View style={styles.leftItem}>
            <Text style={styles.text}>
              Çözdüğün Soru Sayısı :{" "}
              {(trueArr[index] ? trueArr[index] : 0) +
                (falseArr[index] ? falseArr[index] : 0)}
            </Text>
            <Text style={styles.text}>
              Doğru Soru Sayısı : {trueArr[index] ? trueArr[index] : 0}
            </Text>
            <Text style={styles.text}>
              Yanlış Soru Sayısı : {falseArr[index] ? falseArr[index] : 0}
            </Text>
          </View>
          <View style={styles.rightItem}>
            <Text style={[styles.text, styles.border]}>
              {" "}
              %{" "}
              {trueArr[index] && falseArr[index]
                ? Math.round(
                    (trueArr[index] / (trueArr[index] + falseArr[index])) * 100
                  )
                : 0}
            </Text>
            <Text style={[styles.text, styles.borderFalse]}>
              {" "}
              %{" "}
              {trueArr[index] && falseArr[index]
                ? Math.round(
                    (falseArr[index] / (trueArr[index] + falseArr[index])) * 100
                  )
                : 0}
            </Text>
          </View>
        </CardItem>
      </Card>
    );
  };
  removeAllFromStorage = () => {
    alert("DİKKAt !!!! \n Tüm doğru ve yanlış bilgileriniz silinecektir.!!!");
    AsyncStorage.clear();
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <Content>
              <Card>
                <CardItem header style={styles.cardHead}>
                  <Text style={styles.text}>Genel Durum</Text>
                  <Button onPress={this.removeAllFromStorage} danger>
                    <Text> Reset </Text>
                  </Button>
                </CardItem>
                <CardItem>
                  <Body>{this.RenderChart()}</Body>
                </CardItem>
                <CardItem footer style={styles.firstItem}>
                  <Text>
                    Çözdüğün Soru :{" "}
                    {this.state.totalFalse + this.state.totalTrue}
                  </Text>
                  <Text> Doğru Soru Sayısı : {this.state.totalTrue}</Text>
                  <Text>Yanlış Soru Sayısı : {this.state.totalFalse}</Text>
                </CardItem>
              </Card>

              <FlatList
                data={testCategories}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </Content>
          </SafeAreaView>
        </ScrollView>
      </Container>
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const styles = StyleSheet.create({
  itemFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  leftItem: {
    flex: 4,
  },
  rightItem: {
    flex: 1,
  },
  text: {
    fontSize: RFValue(15, 560),
  },
  card: {
    paddingBottom: RFValue(15, 560),
  },
  border: {
    borderColor: "#666666",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#20d2bb",
    marginBottom: 15,
    color: "#ffff",
  },
  borderFalse: {
    borderColor: "#666666",
    borderWidth: 1,
    backgroundColor: "#fb6666",
    borderRadius: 15,
    marginBottom: 15,
    color: "#ffff",
  },
  cardHead: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
