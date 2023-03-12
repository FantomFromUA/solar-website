import {SolarAction, SolarState, SolarTypes} from "../../types/solar";
import Solar from "../../interfaces/Solar";

const initialState : SolarState = {
    solars : [],
    loading : false,
    error : null
} 

export const solarReducer = (state = initialState, action : SolarAction) : SolarState => {
    switch(action.type){
        case SolarTypes.FETCH_SOLARS:
             return {...state, loading: true};
        case SolarTypes.FETCH_SOLARS_SUCCESS:
            return {...state, loading: false, solars: action.payload};
        case SolarTypes.FETCH_SOLARS_ERROR:
            return {...state, loading: false, error: action.payload};
        case SolarTypes.CHANGE_SOLAR_QUANTITY:
            return {...state, solars: changeQuantity(state.solars, action.payload.name, action.payload.num)}
        default:
            return state;
    }
}

const changeQuantity = (solars: Solar[], name: string, num: number) : Solar[] => {
    return solars.map((solar) => {
        if (solar.name === name) {
            return { ...solar, orderedQuantity: num };
        }
        return solar;
    });
}