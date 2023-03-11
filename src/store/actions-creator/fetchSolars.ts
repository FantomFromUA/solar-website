import { Dispatch } from "react"
import { SolarAction, SolarTypes } from "../../types/solar"
import axios from "axios"
import Solar from "../../classes/Solar";


export const fetchSolars = () => {
    return async (dispatch : Dispatch<SolarAction>) => {
        try{
            dispatch({type: SolarTypes.FETCH_SOLARS})
            const response = await axios.get("https://testtask.twnty.de/");
            const solarsArray : Solar[] = [];
            for(let name in response.data){
                solarsArray.push(new Solar(
                    name,
                    response.data[name].quantity,
                    response.data[name].price
                ));
            }
            dispatch({type: SolarTypes.FETCH_SOLARS_SUCCESS, payload: solarsArray});
        }catch{
            dispatch({
                type: SolarTypes.FETCH_SOLARS_ERROR, 
                payload: "There is an error in solar loading"
            })
        }
    }
}