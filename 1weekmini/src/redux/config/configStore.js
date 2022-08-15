import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import posts from '../modules/post';
import auth from '../modules/auth';

const rootReducer = combineReducers({
  posts,
  auth,
});
const store = createStore(rootReducer);

export default store;
