import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import PINCode from '@haskkor/react-native-pincode';


export default class Account2 extends Component {
  render () {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ justifyContent: "flex-start", marginLeft: 20, alignItems: "flex-start" }}>
          <Text style={{fontSize: 30, fontWeight: 700}}>Type your passcode again</Text>
          <Text style={{fontSize: 20, marginTop: 50}}>
            Make sure you remember it. If you forget the passcode, you will need to recover it with seed phrase.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', marginTop: 20}}>
          <PINCode status={'enter'}
              colorCircleButtons="#cccccc87"
              styleLockScreenColorIcon="black"
          />
        </View>
      </View>
    )
  }
}
