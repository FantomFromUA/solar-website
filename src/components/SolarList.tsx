import React, {useEffect} from "react"
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchSolars } from "../store/actions-creator/fetchSolars";
import { store } from "../store";
import "../styles.css";
import SolarComponent from "./SolarComponent";

const SolarList : React.FC = () => {
    const {solars, error, loading} = useTypedSelector(state => state.solar);
    const dispatch = store.dispatch;
    useEffect(() => {
        dispatch(fetchSolars());
    }, []);

    console.log(solars)

    if(loading){
        <h1>Loading...</h1>
    }
    
    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div className="container">
            {
                solars.map((solar) =>
                    <SolarComponent key={solar.name} solar={solar}/>
                )
            }
        </div>
    );

}

export default SolarList;