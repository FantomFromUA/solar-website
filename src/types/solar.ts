export enum SolarTypes{
    FETCH_SOLARS = "FETCH_SOLARS",
    FETCH_SOLARS_SUCCESS = "FETCH_SOLARS_SUCCESS",
    FETCH_SOLARS_ERROR = "FETCH_SOLARS_ERROR"
}

interface FetchSolarAction{
    type: SolarTypes.FETCH_SOLARS;
}

interface FetchSolarSuccessAction{
    type: SolarTypes.FETCH_SOLARS_SUCCESS;
    payload: any[];
}

interface FetchSolarErrorAction{
    type: SolarTypes.FETCH_SOLARS_ERROR;
    payload: string;
}

export type SolarAction = FetchSolarAction | FetchSolarErrorAction | FetchSolarSuccessAction;

export interface SolarState{
    solars : any[],
    loading: boolean,
    error: null | string
}