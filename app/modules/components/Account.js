import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';

export default class SignUp extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}>
        <Text style={{fontSize: 30, fontWeight: 700}}>Set your passcode</Text>
        <Text style={{fontSize: 20, marginTop: 50}}>Pick 6 digit numbers to unlock and confirm transactions.</Text>
      </View>
    )
  }
}
