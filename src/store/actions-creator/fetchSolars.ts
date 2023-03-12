import { Dispatch } from "react"
import { SolarAction, SolarTypes } from "../../types/solar"
import axios from "axios"
import Solar from "../../interfaces/Solar";


export const fetchSolars = () => {
    return async (dispatch : Dispatch<SolarAction>) => {
        try{
            dispatch({type: SolarTypes.FETCH_SOLARS})
            const response = await axios.get("https://testtask.twnty.de/");
            const solarsArray : Solar[] = [];
            for(let name in response.data){
                solarsArray.push({
                    name,
                    quantity: response.data[name].quantity,
                    price: response.data[name].price
                });
            }
            dispatch({type: SolarTypes.FETCH_SOLARS_SUCCESS, payload: solarsArray});
        }catch(error){
            console.log(error);
            dispatch({
                type: SolarTypes.FETCH_SOLARS_ERROR, 
                payload: "There is an error in solar loading"
            });
        }
    }
}