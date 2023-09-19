import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import RecetaEnParticular from "../components/RecetaEnParticular";
const axios = require("axios");

function Cocciones() {
  const [recetas, setRecetas] = useState([]);
  const [particular, setParticular] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [verBoton, setVerBoton] = useState({ display: "none" });
  const [mostrarBotonNota, setMostrarBoton] = useState({ display: "none" });
  const [notaDeCoccionYcata, setNotaDeCoccionYcata]= useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3000/cocciones")
      .then(function (response) {
        // handle success
        setRecetas(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const history = useHistory();
  const navigateToRecetaEnParticular = () => {
    let path = `/PaginaRecetaEnParticular`;
    history.push(path);
  };

  function detalles(receta) {
    setMostrar({ display: "block" });
    setVerBoton({ display: "none" });

    axios
      .get("http://localhost:3000/cocciones/" + receta)
      .then(function (response) {
        // handle success
        setParticular(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function cambiarBoton() {
   
    setMostrarBoton({ display: "block" });
    
  }

  function handleChangeNotaDeCoccionYcata(event) {
   
    const value = event.target.value;
    setNotaDeCoccionYcata(value)
    
  }

  return (
    <div>
      <h1>Historial de cocciones</h1>
      <div>
        <RecetaEnParticular datos={particular} verBoton={verBoton} />
        <form style={mostrarBotonNota}>
          <label for="notaDeCoccionYcata">Nota de coccion y cata</label>
          <textarea onChange={handleChangeNotaDeCoccionYcata} name="notaDeCoccionYcata" rows="5" cols="33"></textarea>
        </form>
        <button onClick={handleChangeNotaDeCoccionYcata} style={mostrarBotonNota}>nota de coccion</button>
      </div>

      <div style={{ padding: "50px" }}>
        {mostrar
          ? false
          : recetas.map((receta) => {
              return Object.entries(receta).map(([recetaName, receta]) => {
                if (recetaName === "titulo") {
                  return (
                    <div style={{}}>
                      <h1>
                        {" "}
                        Titulo:<span>{receta}</span>
                      </h1>
                    </div>
                  );
                }
                if (recetaName === "_id") {
                  return (
                    <div style={{ position: "relative", top: "100px" }}>
                      <button
                        onClick={() => {
                          detalles(receta);
                          cambiarBoton()
                        }}
                      >
                        detalles
                      </button>
                    </div>
                  );
                }
              });
            })}
      </div>
    </div>
  );
}

export default Cocciones;
