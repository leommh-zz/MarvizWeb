import { combineReducers } from "redux"

import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import UserReducer from './UserReducer';
import MarvelReducer from './MarvelReducer';

const appReducer = combineReducers({LoginReducer, RegisterReducer, UserReducer, MarvelReducer});

export default ((state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
});
