import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const axios = require('axios');

function RecetaEnParticular(props) {

  const [identificadorParaUpdate, setIdentificadorParaUpdate] = useState(""); 
  const [nuevoValor, setNuevoValor]= useState("")
  
  const history = useHistory();
  const navigateToRecetas = () => {
    let path = `/recetas`; 
    history.push(path);
    window.location.reload(false);
    };

    
    let id

    function borrarReceta() {
      console.log(data._id);
      axios.delete("http://localhost:3000/recetas/"+data._id)
      navigateToRecetas()
    }

    
    function handleChange(event) {
    
      const value = event.target.value;
    setNuevoValor(value);
    console.log(nuevoValor);

    }

    function handleUpdate(keyToUpdate) {
      if (identificadorParaUpdate && nuevoValor) {
        const updatedField = {
          [keyToUpdate]: nuevoValor
        };
    
        axios.put("http://localhost:3000/recetas/" + data._id, updatedField)
          .then(response => {
            console.log("Field updated:", response.data);
            // You might want to update your UI or state accordingly
          })
          .catch(error => console.error("Error updating field:", error));
      }
    }

  

   
   
    let data = props.datos
    
    return ( 
        <div>
          
      {
      Object.keys(data).map((key, index) => {
        if(key==="_id" || key==="__v"){
          id =  data._id
                    
          return(
            <span></span>
          )
        }else{
         
          
           
          return (
          <div key={index}>
            <h2>
              {key}: {data[key]}
             
            </h2>
            <label htmlFor="valorAeditar">Ingresar nuevo valor: </label>
      <input  name="valorAeditar" onChange={handleChange} ></input>
             
          <button onClick={() => {
                  setIdentificadorParaUpdate(key);
                  handleUpdate(key)
                  
                   }}>editar {key}</button>
                         
          </div>
        );}
       
      })}
    
     <button style={props.verBoton} onClick={navigateToRecetas}>volver a recetas</button>
     <button onClick={borrarReceta}>Borrar receta</button>
           
        </div>
     );
}

export default RecetaEnParticular;