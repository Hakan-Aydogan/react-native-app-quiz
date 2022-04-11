import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
//import Icon from 'react-native-vector-icons/FontAwesome';
export default class MenuButton extends Component {
  toggleMenu = () => {
    this.props.navigation.toggleDrawer();
  };
  render() {
    return (
      <TouchableOpacity style={Styles.menu} onPress={this.toggleMenu}>
        <Icon name={'ios-menu'} size={RFValue(35, 560)} />
      </TouchableOpacity>
    );
  }
}
const Styles = StyleSheet.create({
  menu: {
    paddingHorizontal: 10,
  },
});
