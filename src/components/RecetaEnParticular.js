import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios");

function RecetaEnParticular(props) {
  const [identificadorParaUpdate, setIdentificadorParaUpdate] = useState("");
  const [nuevoValor, setNuevoValor] = useState("");
  const [estiloEdicion, setEstiloEdicion] = useState({ display: "none" });
  const [editarButtonDisplay, setEditarButtonDisplay] = useState("block");

  const history = useHistory();
  const navigateToRecetas = () => {
    let path = `/recetas`;
    history.push(path);
    window.location.reload(false);
  };

  let id;

  function borrarReceta() {
    axios.delete("http://localhost:3000/recetas/" + data._id)
    .then(() => {
       navigateToRecetas();
    })
  }

  /*
  function handleChange(event, keyToUpdate) {
    const value = event.target.value;
    setNuevoValor(value);
    handleUpdate({ [keyToUpdate]: value });
  }
  */
  
/*
  useEffect(() => {
    handleUpdate(identificadorParaUpdate, nuevoValor);
  }, [nuevoValor, identificadorParaUpdate]);
  */
  
  function handleChange(event, keyToUpdate) {
    const value = event.target.value;
    setNuevoValor(value);
    handleUpdate({ [keyToUpdate]: value });
  }
  

  
  function handleUpdate(fieldsToUpdate) {
    if (fieldsToUpdate && Object.keys(fieldsToUpdate).length > 0) {
      const updatedFields = fieldsToUpdate;

      axios
        .put("http://localhost:3000/recetas/" + data._id, updatedFields)
        .then((response) => {
          console.log("Fields updated:", response.data);
         
           })
           .catch((error) => console.error("Error updating fields:", error));
    }
  }
  
 

  function cambiarEstiloEdicion() {
    setEstiloEdicion({ display: "block" });
    setEditarButtonDisplay("none");

   
    
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
                <input name="valorAeditar"/*onChange={handleChange}*/onChange={(event) => handleChange(event, key)}></input>
                
                
                
              </div>
            </div>
          );
        }
      })}

      <button  style={{ ...props.verBoton, display: editarButtonDisplay }} onClick={cambiarEstiloEdicion}>
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
