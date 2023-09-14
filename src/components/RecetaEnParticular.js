import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios");

function RecetaEnParticular(props) {
  const [identificadorParaUpdate, setIdentificadorParaUpdate] = useState("");
  const [nuevoValor, setNuevoValor] = useState("");
  const [estiloEdicion, setEstiloEdicion] = useState({ display: "none" });

  const history = useHistory();
  const navigateToRecetas = () => {
    let path = `/recetas`;
    history.push(path);
    window.location.reload(false);
  };

  let id;

  function borrarReceta() {
    axios.delete("http://localhost:3000/recetas/" + data._id);
    navigateToRecetas();
  }

  function handleChange(event) {
    const value = event.target.value;
    setNuevoValor(value);
    handleUpdate(identificadorParaUpdate);
  }

  useEffect(() => {
    handleUpdate(identificadorParaUpdate, nuevoValor);
  }, [nuevoValor, identificadorParaUpdate]);

  function handleUpdate(keyToUpdate, nuevoValor) {
    if (keyToUpdate && nuevoValor) {
      const updatedField = {
        [keyToUpdate]: nuevoValor,
      };

      axios
        .put("http://localhost:3000/recetas/" + data._id, updatedField)
        .then((response) => {
          console.log("Field updated:", response.data);
        })
        .catch((error) => console.error("Error updating field:", error));
    }
  }

  function cambiarEstiloEdicion() {
    setEstiloEdicion({ display: "block" });
  }

  function cocinarReceta() {
    const dataToSend = { ...data };
    delete dataToSend._id;
    delete dataToSend.__v;
    console.log(dataToSend);

    axios
      .post("http://localhost:3000/cocciones", dataToSend)
      .then(function (response) {
        console.log("data guardada");
      });
  }

  let data = props.datos;

  return (
    <div>
      {Object.keys(data).map((key, index) => {
        if (key === "_id" || key === "__v") {
          id = data._id;

          return <span></span>;
        } else {
          return (
            <div key={index}>
              <h2>
                {key}: {data[key]}
              </h2>
              <div style={estiloEdicion}>
                <label htmlFor="valorAeditar">Ingresar nuevo valor: </label>
                <input name="valorAeditar" onChange={handleChange}></input>

                <button
                  onClick={() => {
                    setIdentificadorParaUpdate(key);
                    handleUpdate(key);
                  }}
                >
                  editar {key}
                </button>
              </div>
            </div>
          );
        }
      })}

      <button style={props.verBoton} onClick={cambiarEstiloEdicion}>
        Editar receta
      </button>
      <button style={props.verBoton} onClick={navigateToRecetas}>
        volver a recetas
      </button>
      <button style={props.verBoton} onClick={borrarReceta}>
        Borrar receta
      </button>
      <button style={props.verBoton} onClick={cocinarReceta}>
        Cocinar receta
      </button>
    </div>
  );
}

export default RecetaEnParticular;
