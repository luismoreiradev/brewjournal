import React, { useState } from 'react';
import InputGranos from '../components/InputGranos';
import Granos from '../components/Granos';
const axios = require('axios');


function Calculador() {

  const [allGrains, setAllGrains]=useState([])
const [volumenes, setVolumenes]=useState({})
const [multiplo, setMultiplo]=useState(1)

function factorConversionUnidades(conversor){
  setMultiplo(conversor)
}

function newVolums(volums) {
  setVolumenes(volums) 
}  

  function newGrain(granoIngresado){
setAllGrains(prevVal=>{return [...prevVal,granoIngresado]})  
  }

 
let titulo = allGrains.map(a => a.titulo);
let nombreGrano = allGrains.map(a => a.nombreGrano);
let nombreLupulo = allGrains.map(a => a.nombreLupulo);
let cantidadGrano = allGrains.map(a => a.cantidadGrano);
let cantidadLupulo = allGrains.map(a => a.cantidadLupulo);

let data = {titulo:titulo[0],
  grano:{nombreGrano:nombreGrano[0], cantidadGrano:cantidadGrano[0]},
  lupulo:{nombreLupulo:nombreLupulo[0], cantidadLupulo:cantidadLupulo[0]},
}

console.log(data);



function guardarReceta() {
     axios.post("http://localhost:3000/recetas",
     data )
   .then(function (response) {
    console.log(response);
  })
  }

 


  return (    
    <div>
    <h1>Brewery Calculator</h1>
  <InputGranos newGrain={newGrain} newVolums={newVolums}/>
   <Granos allGrains={allGrains} volumenes={volumenes} factorConversionUnidades={factorConversionUnidades} />
   
   <div><button onClick={guardarReceta}>guardar receta</button></div>
    </div>
    
  );
}

export default Calculador;
