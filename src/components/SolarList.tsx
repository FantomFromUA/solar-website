import React, {useEffect} from "react"
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchSolars } from "../store/actions-creator/fetchSolars";
import { store } from "../store";

const SolarList : React.FC = () => {
    const {solars, error, loading} = useTypedSelector(state => state.solar);
    const dispatch = store.dispatch;

    useEffect(() => {
        dispatch(fetchSolars());
    }, []);
    console.log(solars);

    return(
        <div>

        </div>
    );

}

export default SolarList;