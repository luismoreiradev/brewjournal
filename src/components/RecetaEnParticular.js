import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const axios = require('axios');

function RecetaEnParticular(props) {

  const [identificadorParaUpdate, setIdentificadorParaUpdate] = useState(""); 

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
             
          <button onClick={() => {
                  setIdentificadorParaUpdate(key);
                  console.log(`Button for ${identificadorParaUpdate} clicked.`);
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