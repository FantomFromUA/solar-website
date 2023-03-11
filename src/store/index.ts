import { configureStore } from '@reduxjs/toolkit'   
import { myCombineReducer } from "./reducers/myCombineReducer";

export const store = configureStore({
    reducer: myCombineReducer
});

export type RootState = ReturnType<typeof store.getState>;