import React from "react"
import Solar from "../classes/Solar";
import {useNavigate} from "react-router-dom";

const SolarComponent : React.FC<{solar: Solar}> = (props) => {
    const router = useNavigate();

    return(
        <div className="child">
            <h3>{props.solar.name}</h3>
            <button onClick={() => router('/solar/' + props.solar.name)}>Select</button>
        </div>
    );
}

export default SolarComponent;