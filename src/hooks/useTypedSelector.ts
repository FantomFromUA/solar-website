import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/myCombineReducer";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;