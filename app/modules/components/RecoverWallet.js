import React, {Fragment, Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

export default class RecoverWallet extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{fontSize: 30, fontWeight: 700}}>Enter your seed phrase to recover</Text>

        <TextInput
          style={{height: 50, borderColor: 'gray', borderWidth: 1, marginRight: '5%'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          numberOfLines={10}
          multiline={true}
          marginTop="10%"
      />
      </View>
    )
  }
}
