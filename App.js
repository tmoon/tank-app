/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignUp from './app/modules/auth/SignUp';
import Launch from './app/modules/components/Launch';
import Account from './app/modules/components/Account';
import Account2 from './app/modules/components/Account2';
import Account3 from './app/modules/components/Account3';
import Account4 from './app/modules/components/Account4';
import RecoverWallet from './app/modules/components/RecoverWallet';
import RecoverMsg from './app/modules/components/RecoverMsg';
import PINCode from '@haskkor/react-native-pincode';

const App = () => {
  return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            {/* <SignUp/> */}
            {/* <Launch/> */}
            {/* <Account/> */}
            <Account2/>
            {/* <Account3/> */}
            {/* <Account4/> */}
            {/* <RecoverWallet/> */}
            {/* <RecoverMsg/> */}
            {/* <PINCode status={'choose'}/> */}

        </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
