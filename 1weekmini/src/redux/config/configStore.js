import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import posts from '../modules/post';
import user from '../modules/userReducer';

const rootReducer = combineReducers({
  posts,
  user,
});
const store = createStore(rootReducer);

export default store;
