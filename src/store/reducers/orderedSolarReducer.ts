import {OrderedSolarAction, OrderedSolarState, OrderedSolarTypes} from "../../types/orderedSolar";
import Solar from "../../classes/Solar";

const initialState : OrderedSolarState = {
    orderedSolars : [new Solar("bebra", 1, 22)]
}

export const orderedSolarReducer = (state = initialState, action : OrderedSolarAction) : OrderedSolarState => {
    switch(action.type){
        case OrderedSolarTypes.ADD_SOLAR:
            return {orderedSolars: [...state.orderedSolars, action.payload]};
        case OrderedSolarTypes.DELETE_SOLAR:
            return {orderedSolars: [...deleteSolar(state.orderedSolars, action.payload)]};
        case OrderedSolarTypes.CHANGE_QUANTITY:
            return {orderedSolars: [...state.orderedSolars]};
        default:
            return state;
    }
}

const deleteSolar = (solars: Solar[], solarToDelete: Solar): Solar[] => {
    return solars.filter(solar => solar.name === solarToDelete.name);
}