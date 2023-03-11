import React from "react";
import {Link} from "react-router-dom";
import "../styles.css"

const Header : React.FC = () => {
    return (
        <div className="header">
            <h1 className="header_item">Solar shop</h1>
            <div className="header_item">
                <Link style={{margin: 20}} to="/solar">Solar</Link>
                <Link to="/basket">Basket</Link>
            </div>
        </div>
    );
}

export default Header;