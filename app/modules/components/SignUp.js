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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 50 }}>Terra Bank</Text>
          <Text style={{ fontSize: 30 }}>Welcome!</Text>
          <View style={{ flex: 1, justifyContent: "center", marginTop: 20 }}>
            <Button
              title="Open Account"
            />
            <Button
              title="Renew Account"
            />
          </View>
      </View>
    )
  }
}
