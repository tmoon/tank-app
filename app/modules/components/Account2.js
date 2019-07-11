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
        <Text style={{fontSize: 30, fontWeight: 700}}>Type your passcode again</Text>
        <Text style={{fontSize: 20, marginTop: 50}}>
          Make sure you remember it. If you forget the passcode, you will need to recover it with seed phrase.
        </Text>
      </View>
    )
  }
}
