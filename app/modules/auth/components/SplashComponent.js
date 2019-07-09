import React, { memo } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from '../../common';

const SplashComponent = () => (
  <View style={$$.container}>
    <Text.H5 style={$$.dummyText}>TANK APP</Text.H5>
  </View>
);

const $$ = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primary700',
    justifyContent: 'center',
  },
  dummyText: {
    letterSpacing: 2,
    color: '$processing',
    textAlign: 'center',
  },
});

export default memo(SplashComponent);
