import EStyleSheet from 'react-native-extended-stylesheet';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import NavTransitioner from './lib/helpers/NavTransitioner';
import SplashContainer from './modules/auth/containers/SplashContainer';
import VerifyOtpContainer from './modules/auth/containers/VerifyOtpContainer';

// const $border2 = EStyleSheet.value('$border2');
const $accent1 = EStyleSheet.value('$accent1');

const AuthStack = createStackNavigator(
  {
    verifyCode: VerifyOtpContainer,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: $accent1,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
    },
    transitionConfig: NavTransitioner,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    authLoading: SplashContainer,
    auth: AuthStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'authLoading',
    transitionConfig: NavTransitioner,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
