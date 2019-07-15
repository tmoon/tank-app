import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import PINCode from '@haskkor/react-native-pincode';

export default class Account extends Component {
  render () {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}>
          <Text style={{fontSize: 30, fontWeight: 700}}>Set your passcode</Text>
          <Text style={{fontSize: 20, marginTop: 50}}>Pick 6 digit numbers to unlock and confirm transactions.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', marginTop: 20}}>
          <PINCode status={'choose'}
              colorCircleButtons="#cccccc87"
              styleLockScreenColorIcon="black"
          />
        </View>
      </View>
    )
  }
}
