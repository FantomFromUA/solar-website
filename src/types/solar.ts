import Solar from "../interfaces/Solar";
import ChangeQuantity from "../interfaces/ChangeQuantity";

export enum SolarTypes{
    FETCH_SOLARS = "FETCH_SOLARS",
    FETCH_SOLARS_SUCCESS = "FETCH_SOLARS_SUCCESS",
    FETCH_SOLARS_ERROR = "FETCH_SOLARS_ERROR",
    CHANGE_SOLAR_QUANTITY = "CHANGE_SOLAR_QUANTITY"
}

interface FetchSolarAction{
    type: SolarTypes.FETCH_SOLARS;
}

interface FetchSolarSuccessAction{
    type: SolarTypes.FETCH_SOLARS_SUCCESS;
    payload: Solar[];
}

interface FetchSolarErrorAction{
    type: SolarTypes.FETCH_SOLARS_ERROR;
    payload: string;
}

interface ChangeSolarQuantityAction{
    type: SolarTypes.CHANGE_SOLAR_QUANTITY;
    payload: ChangeQuantity
}

export type SolarAction = FetchSolarAction | FetchSolarErrorAction | FetchSolarSuccessAction | ChangeSolarQuantityAction;

export interface SolarState{
    solars : Solar[],
    loading: boolean,
    error: null | string
}