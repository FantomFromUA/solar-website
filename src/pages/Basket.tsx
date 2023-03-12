import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import OrderedSolarComponent from "../components/OrderedSolarComponent";
import orderedSolar from "../interfaces/OrderedSolar";
import {store} from "../store";
import {OrderedSolarTypes} from "../types/orderedSolar";
import {useNavigate} from "react-router-dom";
import {SolarTypes} from "../types/solar";
import solar from "../interfaces/Solar";

const Basket : React.FC = () => {

    const { orderedSolars } = useTypedSelector(state => state.orderedSolar);
    const dispatch = store.dispatch;
    const route = useNavigate();

    const initializeTotalPrice = () : number => {
        let res = 0;
        for(let solar in orderedSolars){
            res += orderedSolars[solar].price * orderedSolars[solar].orderedQuantity;
        }
        return res;
    }
    const [ totalPrice, setTotalPrice ] = useState(initializeTotalPrice());



    const changeTotalPrice = (num : number) =>{
        setTotalPrice(totalPrice + num);
    }

    const submitOrder = () => {
        setTotalPrice(0);
        for(let orderedSolar in orderedSolars){
            dispatch({
                type: SolarTypes.CHANGE_SOLAR_QUANTITY,
                payload: {
                    name: orderedSolars[orderedSolar].name,
                    num: orderedSolars[orderedSolar].quantity - orderedSolars[orderedSolar].orderedQuantity
                }
            });
        }
        dispatch({type: OrderedSolarTypes.DELETE_ALL});
        alert(`Success order\n total price - ${totalPrice}`);
    }

    return (
        <div className="container">
            {orderedSolars.map(solar =>
                <OrderedSolarComponent key={solar.name} solar={solar} changeTotalPrice={changeTotalPrice}/>
            )}
            <h2 style={{textAlign: "center"}}>Total price: {totalPrice}</h2>
            <input type="submit" onClick={submitOrder}/>
        </div>
    );
};

export default Basket;