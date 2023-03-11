import React from "react"
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SolarList : React.FC = () => {
    const {solars, error, loading} = useTypedSelector(state => state.solar);
    
    return(
        <div>

        </div>
    );

}

export default SolarList;