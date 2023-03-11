import React from 'react';
import SolarList from './components/SolarList';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import WrongPath from "./pages/WrongPath";
import SolarName from "./pages/SolarName";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/solar" element={<SolarList/>}></Route>
                <Route path="/solar/:name" element={<SolarName/>}></Route>
                <Route path="*" element={<WrongPath/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
