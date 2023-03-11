import Solar from "../classes/Solar";

export enum OrderedSolarTypes{
    ADD_SOLAR = "ADD_SOLAR",
    DELETE_SOLAR = "DELETE_SOLAR",
    CHANGE_QUANTITY = "CHANGE_QUANTITY"
}

interface AddOrderedSolarAction{
    type: OrderedSolarTypes.ADD_SOLAR;
    payload: Solar;
}

interface DeleteOrderedSolarAction{
    type: OrderedSolarTypes.DELETE_SOLAR;
    payload: Solar;
}

interface ChangeQuantityAction{
    type: OrderedSolarTypes.CHANGE_QUANTITY;
    payload: any[];
}

export type OrderedSolarAction = AddOrderedSolarAction | DeleteOrderedSolarAction | ChangeQuantityAction;

export interface OrderedSolarState{
    orderedSolars : Solar[]
}