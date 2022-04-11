import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Quantity extends Component {
  render() {
    return (
      <View>
        <Button onPress={this.props.onPress} title="10">
          10 Soru
        </Button>
      </View>
    );
  }
}
