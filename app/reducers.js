import { combineReducers } from 'redux';
import authReducer from './modules/auth/ducks';

const appReducers = combineReducers({
  auth: authReducer,
});

const reducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducers(state, action);
};

export default reducers;
