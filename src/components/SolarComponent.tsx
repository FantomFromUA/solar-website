import React from "react"
import Solar from "../classes/Solar";
import "../styles.css";

const SolarComponent : React.FC<{solar: Solar}> = (props) => {
    return(
        <div className="child">
            <h3>{props.solar.name}</h3>
            <button>Select</button>
        </div>
    );
}

export default SolarComponent;