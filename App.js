import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from './app/config/styles/EStyleSheet';
import store from './app/store';
import Root from './app/routes';
import NavigatorService from './app/lib/NavigatorService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getActiveRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // Dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  };

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Root
            onNavigationStateChange={async (prevState, currentState) => {
              const currentScreen = this.getActiveRouteName(currentState);
              const previousScreen = this.getActiveRouteName(prevState);

              if (previousScreen !== currentScreen && prevState.isTransitioning === false) {
                const route = {
                  previous_screen: previousScreen,
                  current_screen: currentScreen,
                };
                await store.dispatch({
                  type: 'TRACK_SCREEN',
                  payload: route,
                });
              }
            }}
            ref={(navigatorRef) => {
              NavigatorService.setContainer(navigatorRef);
            }}
          />
        </View>
      </Provider>
    );
  }
}
