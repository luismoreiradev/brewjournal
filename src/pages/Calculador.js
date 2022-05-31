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

let titulo = allGrains.map(a => a.titulo);
let nombreGrano = allGrains.map(a => a.nombreGrano);
let nombreLupulo = allGrains.map(a => a.nombreLupulo);
let cantidadGrano = allGrains.map(a => a.cantidadGrano);
let cantidadLupulo = allGrains.map(a => a.cantidadLupulo);

let indexGrano=0 
let grain="grano"
let grano

let indexLupulo=0 
let hop="lupulo"
let lupulo

let indexCantidadGrano=0 
let grainQuantity="cantidadGrano"
let granoCantidad

let indexCantidadLupulo=0 
let hopQuantity="cantidadLupulo"
let lupuloCantidad

let dataForDataBase={}

function setDataForDB(){ 
    dataForDataBase["titulo"]=titulo[0]
    
        nombreGrano.forEach(element => {   
          if (element.length > 0) {
            indexGrano++
            grano=grain.concat(indexGrano)
          dataForDataBase[grano]=element   
            
          }  
        
        });

        cantidadGrano.forEach(element => {   
          if (element.length > 0) {
            indexCantidadGrano++
            granoCantidad=grainQuantity.concat(indexCantidadGrano)
          dataForDataBase[granoCantidad]=element   
            
          }  
          
        });

        nombreLupulo.forEach(element => {   
          if (element.length > 0) {
            indexLupulo++
            lupulo=hop.concat(indexLupulo)
          dataForDataBase[lupulo]=element   
          
          }  
        
        });

        cantidadLupulo.forEach(element => {   
          if (element.length > 0) {
            indexCantidadLupulo++
            lupuloCantidad=hopQuantity.concat(indexCantidadLupulo)
          dataForDataBase[lupuloCantidad]=element   
            
          }  
        
        });
  }

 
  setDataForDB()



function guardarReceta() {
     axios.post("http://localhost:3000/recetas",
     dataForDataBase )
   .then(function (response) {
    console.log(response.data,"data guardada");
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
