import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import ModalScreen from "./ModalScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import TestScreen from "./TestScreen";
import QuestionScreen from "./QuestionScreen";
import MenuButton from "../components/MenuButton";
import HeaderRightButton from "../../src/components/HeaderRightButton";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import NotesMainScreen from "./NotesMainScreen";
import NotesShortMainScreen from "./ShortNotesMain";
import NotesScreen from "./NotesScreen";
import DenemeMainScreen from "./DenemeMainScreen";
import RandomMainScreen from "./RandomMainScreen";
import SendMailScreen from "./SendMailScreen";
import InfoScreen from "./InfoScreen";
import AddStorageScreen from "./AddStorageScreen";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import NotesScreenShort from "./NotesScreenShort";
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Ana Sayfa",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const TestStack = createStackNavigator({
  Test: {
    screen: TestScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
  Question: {
    screen: QuestionScreen,

    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const NotesStack = createStackNavigator({
  NotesMain: {
    screen: NotesMainScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Konu Notları",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },

  Notes: {
    screen: NotesScreen,
  },
});
const NotesShortStack = createStackNavigator({
  NotesShortMain: {
    screen: NotesScreenShort,
    params: {
      title: "head",
      catName: "Kısa Notlar",
      id: "short-notes",
      tip: "short",
    },
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Kısa Notlar",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const DenemeStack = createStackNavigator({
  DenemeMain: {
    screen: DenemeMainScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Deneme ",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
  QuestionDeneme: {
    screen: QuestionScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const RandomStack = createStackNavigator({
  RandomMain: {
    screen: QuestionScreen,
    params: {
      title: "head",
      catName: "Karışık Sorular",
      random: "random",
      tip: "random",
    },
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Karışık Sorular ",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const SendMailStack = createStackNavigator({
  SendMailMain: {
    screen: SendMailScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Bize Yazın ",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const AddStorageStack = createStackNavigator({
  AddStorage: {
    screen: AddStorageScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Raporlar ",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});
const InfoStack = createStackNavigator({
  InfoMain: {
    screen: InfoScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <MenuButton navigation={navigation} />,
      headerTitle: "Sınav Hakkında ",
      headerTitleStyle: {
        alignSelf: "center",
      },
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        width: 25,
        drawerIcon: () => <Icon name={"home"} size={RFValue(14, 560)} />,
        title: "Ana Sayfa",
      },
    },

    Test: {
      screen: TestStack,
      navigationOptions: {
        drawerIcon: () => (
          <Icon name={"pencil-square-o"} size={RFValue(14, 560)} />
        ),
      },
    },
    NotesMain: {
      screen: NotesStack,
      navigationOptions: {
        drawerIcon: () => <Icon2 name={"notebook"} size={RFValue(14, 560)} />,
        drawerLabel: "Notlar",
      },
    },
    NotesShortMain: {
      screen: NotesShortStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"book"} size={RFValue(14, 560)} />,
        drawerLabel: "Kısa Notlar",
      },
    },
    DenemeMain: {
      screen: DenemeStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"pencil"} size={RFValue(14, 560)} />,
        drawerLabel: "Denemeler",
      },
    },
    RandomMain: {
      screen: RandomStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"random"} size={RFValue(14, 560)} />,
        drawerLabel: "Rastgele Soru",
      },
    },
    AddStorage: {
      screen: AddStorageStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"line-chart"} size={RFValue(14, 560)} />,
        drawerLabel: "Raporlar",
      },
    },
    SendMailMain: {
      screen: SendMailStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"at"} size={RFValue(14, 560)} />,
        drawerLabel: "İletişim",
      },
    },
    InfoMain: {
      screen: InfoStack,
      navigationOptions: {
        drawerIcon: () => <Icon name={"info"} size={RFValue(14, 560)} />,
        drawerLabel: "Sınav Hakkında",
      },
    },
  },

  {
    drawerWidth: 300,
    //hideStatusBar: true,
    // drawerBackgroundColor: 'rgba(255,255,255,.9)',
    //overlayColor: '#6b52ae',

    contentOptions: {
      margin: 15,
      activeTintColor: "#fff",
      activeBackgroundColor: "#febe29",
      //labelStyle: {size: 40},
    },
  }
);

export default createAppContainer(Drawer);
// const ModalStack = createStackNavigator(
//   {
//     Main: MainStack,
//     ModalScreen,
//   },
//   {mode: Modal, headerMode: 'none'},
// );
