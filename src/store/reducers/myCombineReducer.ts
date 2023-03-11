import {combineReducers} from "redux"
import { solarReducer } from "./solarReducer"

export const myCombineReducer = combineReducers({
    solar : solarReducer
});

export type RootState = ReturnType<typeof myCombineReducer>;