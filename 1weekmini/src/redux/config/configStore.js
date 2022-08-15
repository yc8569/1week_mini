import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import posts from '../modules/post';

const rootReducer = combineReducers({
  posts,
});
const store = createStore(rootReducer);

export default store;
