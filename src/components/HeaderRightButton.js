import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HeaderRightButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Button title="Sonraki Soru" onPress={alert('MEsaj')} />
      </TouchableOpacity>
    );
  }
}
