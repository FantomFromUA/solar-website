import Solar from "../interfaces/Solar";
import OrderedSolar from "../interfaces/OrderedSolar";
import ChangeQuantity from "../interfaces/ChangeQuantity";

export enum OrderedSolarTypes{
    ADD_SOLAR = "ADD_SOLAR",
    DELETE_SOLAR = "DELETE_SOLAR",
    CHANGE_QUANTITY = "CHANGE_QUANTITY",
    DELETE_ALL = "DELETE_ALL"
}

interface AddOrderedSolarAction{
    type: OrderedSolarTypes.ADD_SOLAR;
    payload: OrderedSolar;
}

interface DeleteOrderedSolarAction{
    type: OrderedSolarTypes.DELETE_SOLAR;
    payload: string;
}

interface ChangeQuantityAction{
    type: OrderedSolarTypes.CHANGE_QUANTITY;
    payload: ChangeQuantity;
}

interface DeleteAllSolarsAction{
    type: OrderedSolarTypes.DELETE_ALL;
}


export type OrderedSolarAction = AddOrderedSolarAction
    | DeleteOrderedSolarAction
    | ChangeQuantityAction
    | DeleteAllSolarsAction;

export interface OrderedSolarState{
    orderedSolars : OrderedSolar[]
}