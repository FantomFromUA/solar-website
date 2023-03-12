import {OrderedSolarAction, OrderedSolarState, OrderedSolarTypes} from "../../types/orderedSolar";
import OrderedSolar from "../../interfaces/OrderedSolar";

const initialState : OrderedSolarState = {
    orderedSolars : []
}

export const orderedSolarReducer = (state = initialState, action : OrderedSolarAction) : OrderedSolarState => {
    switch(action.type){
        case OrderedSolarTypes.ADD_SOLAR:
            return {
                orderedSolars: [...addSolar(action.payload, state.orderedSolars)]
            };
        case OrderedSolarTypes.DELETE_SOLAR:
            return {
                orderedSolars: deleteSolar([...state.orderedSolars], action.payload)
            };
        case OrderedSolarTypes.CHANGE_QUANTITY:
            return {
                orderedSolars: changeQuantity(state.orderedSolars, action.payload.name, action.payload.num)
            };
        case OrderedSolarTypes.DELETE_ALL:
            return {
                orderedSolars: []
            };
        default:
            return state;
    }
}

const addSolar = (solarToAdd: OrderedSolar, solars: OrderedSolar[]) : OrderedSolar[] => {
    let exist : boolean = false;
    for(let solar in solars){
        if(solars[solar].name === solarToAdd.name){
            exist = true;
        }
    }

    if(exist){
        return solars;
    }

    return [...solars, solarToAdd];
}

const deleteSolar = (solars: OrderedSolar[], name: string): OrderedSolar[] => {
    return solars.filter(solar => solar.name !== name);
}

const changeQuantity = (solars: OrderedSolar[], name: string, num: number) : OrderedSolar[] => {
    return solars.map((solar) => {
        if (solar.name === name) {
            return { ...solar, orderedQuantity: num };
        }
        return solar;
    });
}