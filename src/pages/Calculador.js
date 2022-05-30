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
    let dataForDataBase={}

  function bla(){ 
nombreGrano.forEach(element => {   
  if (element.length > 0) {
    indexGrano++
    grano=grain.concat(indexGrano)
   dataForDataBase[grano]=element   
    console.log(dataForDataBase);
  }  
  else{
    console.log(" no hay grano");
  }
});

nombreLupulo.forEach(element => {   
  if (element.length > 0) {
    indexLupulo++
    lupulo=hop.concat(indexLupulo)
   dataForDataBase[lupulo]=element   
    console.log(dataForDataBase);
  }  
  else{
    console.log(" no hay lupulo");
  }
});


  }
  bla()



function guardarReceta() {
     axios.post("http://localhost:3000/recetas", /*  {
      titulo:allGrains.titulo,
      grano1:nombreGrano[0],
      grano2:nombreGrano[1],
      grano3:nombreGrano[2],
      grano4:nombreGrano[3],
      grano5:nombreGrano[4],
      grano6:nombreGrano[5],
      grano7:nombreGrano[6],
      cantidadGrano1:cantidadGrano[0],
      cantidadGrano2:cantidadGrano[1],
      cantidadGrano3:cantidadGrano[2],
      cantidadGrano4:cantidadGrano[3],
      cantidadGrano5:cantidadGrano[4],
      cantidadGrano6:cantidadGrano[5],
      cantidadGrano7:cantidadGrano[6],
      lupulo1:nombreLupulo[0],
      lupulo2:nombreLupulo[1],
      lupulo3:nombreLupulo[2],
      lupulo4:nombreLupulo[3],
      lupulo5:nombreLupulo[4],
      lupulo6:nombreLupulo[5],
      cantidadLupulo1:cantidadLupulo[0],
      cantidadLupulo2:cantidadLupulo[1],
      cantidadLupulo3:cantidadLupulo[2],
      cantidadLupulo4:cantidadLupulo[3],
      cantidadLupulo5:cantidadLupulo[4],
      cantidadLupulo6:cantidadLupulo[5],
      levadura:allGrains.levadura
        
  }*/)
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
