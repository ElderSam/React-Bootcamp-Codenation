import { createStore, combineReducers } from "redux";
import homeReducer from "../pages/Home/reducer";
import threadReducer from "../pages/Thread/reducer";

const reducers = combineReducers({
  homeReducer,
  threadReducer
});

const store = createStore(reducers);

export default store;
