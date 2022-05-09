import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
    return ( 
        <div>
            <ul>
                <li><Link to={"/Calculador"}>Calculador</Link></li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/diario"}>Diario</Link></li>
            </ul>
        </div>
     );
}

export default Menu;