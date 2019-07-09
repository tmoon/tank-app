import { NavigationActions, StackActions } from 'react-navigation';

let _container;

function setContainer(container) {
  _container = container;
}

function reset(routeName, params = null) {
  _container.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    })
  );
}

function replace(routeName, params = null) {
  _container.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  );
}

function navigate(routeName, params = null, key) {
  _container.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      key,
    })
  );
}

export default {
  setContainer,
  navigate,
  replace,
  reset,
};
