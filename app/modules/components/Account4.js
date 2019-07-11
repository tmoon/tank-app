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
      <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 10, marginBottom: '100%' }}>
        <View style={{ flex: 1, justifyContent: "flex-start", marginLeft: 20 }}>
          <Text style={{fontSize: 30, fontWeight: "700"}}>Write down these words</Text>
          <Text style={{fontSize: 20, marginTop: 50}}>
            I know you are tempted to screenshot or email it. We highly
            recommend you to physically write down these words
            with pen and paper for extra security.
          </Text>
        </View>
        <View style={{ marginTop: '50%', flex: 1, justifyContent: "center", alignItems: 'center' }}>
          <Button
            title="Done"
          />
      </View>
      </View>
    )
  }
}
