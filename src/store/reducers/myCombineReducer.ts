import {combineReducers} from "redux"
import { solarReducer } from "./solarReducer"
import {orderedSolarReducer} from "./orderedSolarReducer";

export const myCombineReducer = combineReducers({
    solar : solarReducer,
    orderedSolar : orderedSolarReducer
});

export type RootState = ReturnType<typeof myCombineReducer>;