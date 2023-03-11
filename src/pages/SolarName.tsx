import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchSolars} from "../store/actions-creator/fetchSolars";
import {store} from "../store";
import Solar from "../classes/Solar";
import "../styles/SolarNameStyles.css";
import {OrderedSolarTypes} from "../types/orderedSolar";

const SolarName = () => {
    const params = useParams();
    const {solars, error, loading} = useTypedSelector(state => state.solar);
    const {orderedSolars} = useTypedSelector(state => state.orderedSolar);
    const dispatch = store.dispatch;
    const solar = getSolarByName(params.name);

    useEffect(() => {
        dispatch(fetchSolars());
    }, []);

    function getSolarByName(name : string | undefined) : Solar | null {
        for (let i = 0; i < solars.length; i++) {
            if (solars[i].name === name) {
                return solars[i];
            }
        }
        return null; // return null if no Solar object is found with the given name
    }

    const addSolar = () =>{
        dispatch({type: OrderedSolarTypes.ADD_SOLAR, payload: solar});
        console.log(orderedSolars);
    }

    if(solar === null){
        return (
            <h1 style={{textAlign: "center"}}>There is no solar panel with that name</h1>
        );
    }

    console.log(orderedSolars)

    return (
        <div className="solar_container">
            <div className="solar_child">
                <p className="text">{solar.name}</p>
                <p className="text">quantity - {solar.quantity}</p>
                <p className="text">price - {solar.price}</p>
                <button className="button_submit" onClick={addSolar}>Select</button>
            </div>
        </div>
    );
};

export default SolarName;