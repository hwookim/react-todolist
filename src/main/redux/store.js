import { combineReducers, createStore } from "redux";
import task from "./modules/task.reducer";

const reducer = combineReducers({
  task,
});
const store = createStore(reducer);

export default store;
