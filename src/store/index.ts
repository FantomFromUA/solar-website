import { createStore } from "redux";
import { myCombineReducer } from "./reducers/myCombineReducer";

export const store = createStore(myCombineReducer);