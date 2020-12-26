import { combineReducers, createStore } from "redux";
import todo from "./modules/todo.reducer";
import filter from "./modules/filter.reducer";

const reducer = combineReducers({
  todo,
  filter,
});
const store = createStore(reducer);

export default store;
