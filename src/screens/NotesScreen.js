import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ClickItem from '../components/ClickItem';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import Notedefine from '../helper/NotesDefine';
import c657 from '../../data/noteBase/657';
import ShortNotesDefine from '../helper/ShortNotesDefine';

export default class NotesScreen extends Component {
  state = {
    catId: '',
    catName: '',
    data: c657,
    index: 0,
    dataLength: 0,
  };
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('catName'),
    };
  };
  componentDidMount = async () => {
    const {getParam} = this.props.navigation;
    const catId = await getParam('id');
    const catName = await getParam('catName');
    const tip = await getParam('tip');
    let data;
    if (tip === 'long') {
      data = await Notedefine(catId);
    }
    if (tip === 'short') {
      data = await ShortNotesDefine(catId);
    }

    const dataLength = await data.length;

    await this.setState({
      catId,
      catName,
      index: 0,
      dataLength: dataLength,
      data: data,
    });
  };
  next = () => {
    let index = this.state.index;
    index++;
    this.setState({index: index});
  };
  back = () => {
    let index = this.state.index;
    index--;
    this.setState({index: index});
  };
  render() {
    let index = this.state.index;
    let dataLength = this.state.dataLength;

    return dataLength > index ? (
      <View style={styles.main}>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={() => {
            this.scrollView.scrollTo({y: 0});
          }}
          style={styles.scrollView}>
          <View style={[styles.text, styles.colors]}>
            {this.state.data[index].title ? (
              <Text style={[{fontWeight: 'bold'}, styles.text]}>
                {this.state.data[index].title}
              </Text>
            ) : (
              <></>
            )}
            {this.state.data[index].noteBold ? (
              <Text style={[{fontWeight: 'bold'}, styles.text]}>
                {this.state.data[index].noteBold}{' '}
              </Text>
            ) : (
              <></>
            )}

            <Text style={[styles.text, {fontWeight: '400'}]}>
              {this.state.data[index].note}{' '}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <ClickItem
              title={<Icon name={'ios-arrow-back'} size={RFValue(20, 600)} />}
              onclickEvent={this.back}
            />
          </View>
          <View style={styles.footerItem}>
            <TouchableOpacity>
              <ClickItem
                title={
                  <Icon name={'ios-arrow-forward'} size={RFValue(20, 600)} />
                }
                onclickEvent={this.next}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.main}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.text, styles.colors]}>
            <Text style={[{fontWeight: 'bold'}, styles.text]}>SON</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#e2e2e2',
    padding: 0,
  },
  main: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
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
    justifyContent: 'flex-start',
    marginHorizontal: 0,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    borderRadius: 1,
    flex: 1,
  },
  options: {
    borderColor: '#c0c0c0',
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'flex-start',
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    flex: 2,
  },
  questionIndex: {
    fontSize: 15,
    fontFamily: 'sans-serif',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  colors: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: RFValue(15, 560),
    color: '#495057',
    fontFamily: 'sans-serif',

    lineHeight: RFPercentage(4),
    // borderWidth: 0.5,
    // borderRadius: 1,
    borderColor: '#ced4da',
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
