import React, {useEffect, useState} from 'react';
import OrderedSolar from "../interfaces/OrderedSolar";
import {store} from "../store";
import {OrderedSolarTypes} from "../types/orderedSolar";

const OrderedSolarComponent : React.FC<{solar : OrderedSolar, changeTotalPrice: Function}> = (props) => {
    const dispatch = store.dispatch;
    const [orderCount, setOrderCount] = useState(props.solar.orderedQuantity)

    const changeQuantity = (num: number) => {
        props.changeTotalPrice((num - props.solar.orderedQuantity) * props.solar.price);
        setOrderCount(num);
        dispatch({
            type: OrderedSolarTypes.CHANGE_QUANTITY,
            payload: {
                name: props.solar.name,
                num: num
            }
        })
    }

    const deleteOrderedSolar = () => {
        dispatch({
            type: OrderedSolarTypes.DELETE_SOLAR,
            payload: props.solar.name
        })
        props.changeTotalPrice(props.solar.orderedQuantity * props.solar.price * -1);
    }

    return (
        <div className="child">
            <div className="info">
                <h3>{props.solar.name}</h3>
                <p>quantity - {props.solar.quantity}</p>
                <p>price - {props.solar.price}</p>
            </div>
            <div>
                <input
                    type="number"
                    name="quantity"
                    min="0"
                    max={props.solar.quantity}
                    step="1"
                    value={orderCount}
                    onChange={e => {changeQuantity(Number(e.target.value))}}
                />
                <button onClick={deleteOrderedSolar}>Delete</button>
            </div>
        </div>
    );
};

export default OrderedSolarComponent;