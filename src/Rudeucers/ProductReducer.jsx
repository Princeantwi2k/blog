import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  firebase: firebaseReducer,
  AuthReducer: AuthReducer,
});
