import { Dispatch } from "react"
import { SolarAction, SolarTypes } from "../../types/solar"
import axios from "axios"


export const fetchSolars = () => {
    return async (dispatch : Dispatch<SolarAction>) => {
        try{
            dispatch({type: SolarTypes.FETCH_SOLARS})
            const responce = await axios.get("https://testtask.twnty.de/");
            //const solarData = JSON.parse(responce.data);
            dispatch({type: SolarTypes.FETCH_SOLARS_SUCCESS, payload: responce.data});
        }catch{
            dispatch({
                type: SolarTypes.FETCH_SOLARS_ERROR, 
                payload: "There is an error in solar loading"
            })
        }
    }
}