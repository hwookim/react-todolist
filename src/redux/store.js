import { combineReducers, createStore } from "redux";
import task from "./modules/task.reducer";
import filter from "./modules/filter.reducer";

const reducer = combineReducers({
  task,
  filter,
});
const store = createStore(reducer);

export default store;
