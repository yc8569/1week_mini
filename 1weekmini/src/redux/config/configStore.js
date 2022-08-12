import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";

const rootReducer = combineReducers({
  posts,
});
const store = createStore(rootReducer);

export default store;
