import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class SignUp extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", marginTop: '150%' }}>
          <View style={{ position: 'absolute', bottom: 0 }}>
            <Image
          style={{width: 50, height: 50, flex: 1}}
          source={{uri: ''}}
        />
            <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 50 }}>Tagline </Text>

            <Button
              title="Create New Wallet"
            />

          <Text style={{color: 'blue', marginLeft: 10}}
                  onPress={() => LinkingIOS.openURL('http://google.com')}>
                  I already have a wallet >
            </Text>
          </View>
      </View>
    )
  }
}
