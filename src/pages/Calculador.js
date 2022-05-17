import React, { useState } from 'react';
import InputGranos from '../components/InputGranos';
import Granos from '../components/Granos';
const axios = require('axios');


function Calculador() {

  const [allGrains, setAllGrains]=useState([])
const [volumenes, setVolumenes]=useState({})

function newVolums(volums) {
  setVolumenes(volums)
 
}
  

  function newGrain(granoIngresado){
setAllGrains(prevVal=>{return [...prevVal,granoIngresado]}) 
 
  }
  console.log(allGrains);

  function guardarReceta() {
     
    axios.post("http://localhost:3000/recetas", {
      titulo:"hardcoded",
      grano1:"hardcoded",
      cantidadGrano1:99999,
      levadura:"hardcoded"
        
  })
   .then(function (response) {
    console.log(response.data);
  })
  }

 

  return (    
    <div>
    <h1>Brewery Calculator</h1>
  <InputGranos newGrain={newGrain} newVolums={newVolums}/>
   <Granos allGrains={allGrains} volumenes={volumenes} />
   <div><button onClick={guardarReceta}>guardar receta</button></div>
    </div>
    
  );
}

export default Calculador;
