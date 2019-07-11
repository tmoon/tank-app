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
      <View style={{ flex: 1,  marginTop: 10, marginBottom: 500 }}>
        <View style={{ flex: 1, marginLeft: 20, justifyContent: "flex-start" }}>
          <Text style={{fontSize: 30, fontWeight: "700"}}>Type your passcode again</Text>
          <Text style={{fontSize: 30, fontWeight: "700", marginTop: 30}}>Now get ready to write down seed phrase</Text>
          <Text style={{fontSize: 20, marginTop: 50}}>
            If you lose this device or forgot the passcode, seed phrase is the ONLY way to recover your account.
          </Text>
        </View>
        <View style={{ marginTop: 70, flex: 1, justifyContent: "center", alignItems: 'center' }}>
          <Button
            title="Continue"
          />
        </View>
      </View>
    )
  }
}
