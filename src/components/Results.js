import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ClickItem from "../components/ClickItem";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Results extends Component {
  render = () => {
    let correct = Number(this.props.answerCorrect.length);
    let falseAnswer = Number(this.props.answerFalse.length);
    let qCount = Number(this.props.qCount);
    let empty = qCount - (correct + falseAnswer);
    return (
      <View style={[styles.text, styles.colors, styles.result]}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>
            {" "}
            <Icon name={"check"} size={RFValue(25, 600)} color="green" />{" "}
            {" Doğru Sayısı: " + correct}
          </Text>
          <Text style={styles.text}>
            {" "}
            <Icon name={"times"} size={RFValue(25, 600)} color="red" />{" "}
            {" Yanlış Sayısı : " + falseAnswer}
          </Text>
          <View>
            <Text style={styles.text}>
              {" "}
              <Icon
                name={"exclamation"}
                size={RFValue(25, 600)}
                color="purple"
              />{" "}
              {"    Boş Soru    :  " + empty}
            </Text>
          </View>
        </View>
        <ClickItem title="Ana Sayfa" onclickEvent={this.props.backToTest} />
        {falseAnswer !== 0 ? (
          <ClickItem
            title="Yanlış Soruları Çöz"
            onclickEvent={this.props.falseAnwerTest}
          />
        ) : (
          <></>
        )}
        {empty !== 0 ? (
          <ClickItem
            title="Boş Sorular Geri Dön"
            onclickEvent={this.props.emptyAnswers}
          />
        ) : (
          <></>
        )}
        {/* <ClickItem title="tekrar Çöz" onclickEvent={this.props.retest} />
        <ClickItem title="Yeni Çöz" onclickEvent={this.props.newTest} /> */}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#e2e2e2",
    padding: 0,
  },
  result: {
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
  },
  footerItem: {
    flex: 2,
  },
  touch: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  question: {
    justifyContent: "flex-start",
    marginHorizontal: 0,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 1,
    flex: 1,
  },
  options: {
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "flex-start",
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    flex: 2,
  },
  questionIndex: {
    fontSize: 15,
    fontFamily: "sans-serif",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  colors: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: RFValue(20, 600),
    color: "#495057",
    fontFamily: "sans-serif",

    lineHeight: RFPercentage(5),
    // borderWidth: 0.5,
    // borderRadius: 1,
    borderColor: "#ced4da",
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
