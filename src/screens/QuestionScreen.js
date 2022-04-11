/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-bitwise */
import React, { Component } from "react";
import { Text, View, ScrollView, Button, StyleSheet } from "react-native";
import questions from "../../data/questions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import data from '../helper/CatDefine';
import data from "../helper/randomIndexNumber";
import specsData from "../helper/CatDefine";
import Results from "../components/Results";
import Icon from "react-native-vector-icons/Ionicons";
import ClickItem from "../components/ClickItem";
import AsyncStorage from "@react-native-community/async-storage";

export default class QuestionScreen extends Component {
  state = {
    questions: questions,
    index: 0,
    length: 0,
    correct: "",
    color: "#0080ff",
    opt: ["A)", "B)", "C)", "D)", "E)"],
    onPress: false,
    qIndex: 1,
    qCount: 16,
    arrCorrect: [],
    arrFalse: [],
    arrAllQuestion: [],
    arrEmty: [],
    finish: false,
    falseAnwerTest: false,
    arrExistOrNot: 1,

    specs: "",
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("catName"),
    };
  };

  componentDidMount = async () => {
    const { getParam } = this.props.navigation;
    const catId = getParam("id");
    const specs = getParam("specs");
    const random = getParam("random");
    let question;
    if (catId !== undefined) {
      let qCount = await this.state.qCount;
      question = await data(catId, qCount);
      this.setState({ catId });
    }
    if (specs !== undefined) {
      question = await specsData(null, specs);
      await this.setState({ specs });
    }
    if (random !== undefined) {
      let qCount = await this.state.qCount;
      question = await data(random, qCount);
    }
    await this.setState({
      questions: question,
      index: 0,
      length: question.length,
    });
  };

  nextQuestion = () => {
    let i = this.state.index;
    if (!this.state.answerFalse) {
      if (this.state.qCount - 1 === i) {
        this.finishTest();
      } else {
        i++;
      }
    } else {
      if (this.state.qCount - 1 === i) {
        this.finishTest();
      } else {
        i++;
      }
    }

    this.setState({ index: i });
    this.setState({ onPress: false });
  };
  backToTestPage = async () => {
    await this.setState({
      finish: false,
      index: 0,
      arrFalse: [],
      arrCorrect: [],
      qCount: 16,
    });
    const { navigate } = await this.props.navigation;
    navigate("Home");
  };
  reTest = () => {
    this.setState({
      finish: false,
      index: 0,
      arrFalse: [],
      arrCorrect: [],
    });
  };
  emptyAnswersTest = async () => {
    await this.setState({
      falseAnwerTest: true,
      questions: this.state.arrEmty,
      index: 0,
      arrFalse: [],
      arrCorrect: [],
      arrEmty: [],
      finish: false,
      qCount: this.state.arrEmty.length,
    });
  };
  addEmptyQuestion = () => {
    this.state.arrEmty.push(this.state.questions[this.state.index]);
  };
  newTest = async () => {
    const { getParam } = this.props.navigation;
    const catId = getParam("id");
    let qCount = this.state.qCount;
    const question = await data(catId, qCount);
    await this.setState({ questions: question });
    await this.setState({
      finish: false,
      index: 0,
      arrFalse: [],
      arrCorrect: [],
      qCount: 16,
    });
  };
  falseAnwerTest = async () => {
    await this.setState({
      falseAnwerTest: true,
      questions: this.state.arrFalse,
      index: 0,
      arrFalse: [],
      arrCorrect: [],
      finish: false,
      qCount: this.state.arrFalse.length,
    });
  };
  checkAnswer = async (event) => {
    let catId = await parseInt(this.state.questions[this.state.index].cat);
    let trueCount = 0;
    let falseCount = 0;

    await AsyncStorage.getItem(JSON.stringify(catId + 1111)).then((res) => {
      res !== null ? (trueCount = parseInt(res)) : (trueCount = 0);
    });
    await AsyncStorage.getItem(JSON.stringify(catId + 2222)).then((res) => {
      res !== null ? (falseCount = parseInt(res)) : (falseCount = 0);
    });

    if (this.state.questions[this.state.index].correct === event) {
      await this.state.arrCorrect.push(this.state.questions[this.state.index]);
      await trueCount++;

      await AsyncStorage.setItem(
        JSON.stringify(catId + 1111),
        JSON.stringify(trueCount)
      );
    } else {
      await this.state.arrFalse.push(this.state.questions[this.state.index]);
      await falseCount++;

      await AsyncStorage.setItem(
        JSON.stringify(catId + 2222),
        JSON.stringify(falseCount)
      );
    }
    await this.setState({
      onPress: true,
      trueCount: trueCount,
      falseCount: falseCount,
    });
  };
  finishTest = () => {
    this.setState({
      finish: true,
    });
  };

  QuestionRender() {
    return (
      <View style={styles.colors}>
        <Text
          style={[styles.text, { color: "#ffff", backgroundColor: "#fb6666" }]}
        >
          {"Soru " + (this.state.index + 1) + "/" + this.state.questions.length}
        </Text>
        <Text style={styles.text}>
          {this.state.questions[this.state.index].question}
        </Text>
      </View>
    );
  }
  render() {
    return this.state.finish ? (
      <View style={styles.main}>
        <Results
          backToTest={this.backToTestPage}
          retest={this.reTest}
          newTest={this.newTest}
          answerCorrect={this.state.arrCorrect}
          answerFalse={this.state.arrFalse}
          qCount={this.state.qCount}
          arrEmty={this.state.arrEmty}
          falseAnwerTest={this.falseAnwerTest}
          emptyAnswers={this.emptyAnswersTest}
        />
      </View>
    ) : this.state.questions[this.state.index] !== undefined ? (
      <View style={styles.main}>
        <ScrollView
          style={styles.scrollView}
          ref={(ref) => (this.scrollView = ref)}
          onContentSizeChange={() => {
            this.scrollView.scrollTo({ y: 0 });
          }}
        >
          <View>{this.QuestionRender()}</View>
          <View>{this.AnswerRender()}</View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <TouchableOpacity>
              <ClickItem onclickEvent={this.finishTest} title="Testi Bitir" />
            </TouchableOpacity>
          </View>
          <View style={styles.footerItem}>
            <TouchableOpacity onPress={this.addEmptyQuestion}>
              <ClickItem
                onclickEvent={this.nextQuestion}
                title={
                  <Icon name={"ios-arrow-forward"} size={RFValue(20, 600)} />
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : (
      <View>
        <Text>Soru Kalmadı</Text>
      </View>
    );
  }

  AnswerRender = () => {
    let option = this.state.questions[this.state.index];

    var optionArr = [option.A, option.B, option.C, option.D, option.E];
    var letterOptions = ["A", "B", "C", "D", "E"];

    return (
      <View style={styles.option}>
        {this.state.opt.map((item, i) => (
          <TouchableOpacity
            key={this.state.index + optionArr[i]}
            style={styles.touch}
          >
            <Text
              style={[
                this.state.onPress === false
                  ? { backgroundColor: "#ffff" }
                  : option.correct === letterOptions[i]
                  ? { backgroundColor: "#77dd77", color: "#ffff" }
                  : { backgroundColor: "#eb2727", color: "#ffff" },
                styles.text,
                styles.border,
              ]}
              onPress={(event) => {
                option.correct === letterOptions[i]
                  ? this.checkAnswer(letterOptions[i]) &
                    setTimeout(() => {
                      this.nextQuestion();
                    }, 1000)
                  : this.checkAnswer(letterOptions[i]) &
                    setTimeout(() => {
                      this.nextQuestion();
                    }, 1000);
              }}
            >
              {`${item}  ` + optionArr[i]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#e2e2e2",
    padding: 0,
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
  border: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ced4da",
  },
  text: {
    fontSize: RFValue(12, 560),
    fontFamily: "sans-serif",
    lineHeight: RFPercentage(3),
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
