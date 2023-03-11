import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import OrderedSolarComponent from "../components/OrderedSolarComponent";
import orderedSolar from "../interfaces/OrderedSolar";
import {store} from "../store";
import {OrderedSolarTypes} from "../types/orderedSolar";
import {useNavigate} from "react-router-dom";

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
        dispatch({type: OrderedSolarTypes.DELETE_ALL});
        route("/solar");
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