import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div  >
      <ul class="flex flex-wrap items-start text-base p-10 gap-10 ">
        <li className="border-solid border-2 p-3 px-10 hover:bg-lime-500 rounded-full">
          <Link to={"/Calculador"}>Calculador</Link>
        </li>
        <li className="border-solid border-2 p-3 px-10 hover:bg-lime-500 rounded-full">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="border-solid border-2 p-3 px-10 hover:bg-lime-500 rounded-full">
          <Link
            onClick={() => {
              window.location.href = "/recetas";
            }}
            to={"/recetas"}
          >
            Recetas
          </Link>
        </li>
        <li className="border-solid border-2 p-3 px-10 hover:bg-lime-500 rounded-full">
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
