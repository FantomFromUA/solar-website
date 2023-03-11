import { SolarState, SolarAction, SolarTypes } from "../../types/solar";

const initialState : SolarState = {
    solars : [],
    loading : false,
    error : null
} 

export const solarReducer = (state = initialState, action : SolarAction) : SolarState => {
    switch(action.type){
        case SolarTypes.FETCH_SOLARS:
             return {loading: true, error: null, solars: []};
        case SolarTypes.FETCH_SOLARS_SUCCESS:
            return {loading: false, error: null, solars: action.payload};
        case SolarTypes.FETCH_SOLARS_ERROR:
            return {loading: false, error: action.payload, solars: []};
        default:
            return state;
    }
}