import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/Calculador"}>Calculador</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              window.location.href = "/recetas";
            }}
            to={"/recetas"}
          >
            Recetas
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              window.location.href = "/Cocciones";
            }}
            to={"/Cocciones"}
          >
            Historial de cocciones
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
