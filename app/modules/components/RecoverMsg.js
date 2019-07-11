import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';

export default class RecoverMsg extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}>
        <Text style={{fontSize: 30, fontWeight: 700, marginBottom: 20}}>Account Restored {"\n"}</Text>
      <Text style={{fontSize: 30, fontWeight: 700}}>Let's dive into {"\n"}Terra Bank</Text>
      </View>
    )
  }
}
