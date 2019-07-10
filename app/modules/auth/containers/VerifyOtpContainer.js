import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../../common';

class VerifyOtpContainer extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log('SPLASH SCREEN');
  }

  render() {
    return (
      <View>
        <Text.Subtitle1>DUMMY PAGE</Text.Subtitle1>
      </View>
    );
  }
}

export default VerifyOtpContainer;
