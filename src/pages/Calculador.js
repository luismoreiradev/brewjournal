import React, { useState } from 'react';
import InputGranos from '../components/InputGranos';
import Granos from '../components/Granos';


function Calculador() {

  const [allGrains, setAllGrains]=useState([])
const [volumenes, setVolumenes]=useState({})

function newVolums(volums) {
  setVolumenes(volums)
 
}
  

  function newGrain(granoIngresado){
setAllGrains(prevVal=>{return [...prevVal,granoIngresado]})  
  }

 

  return (    
    <div>
    <h1>Brewery Calculator</h1>
  <InputGranos newGrain={newGrain} newVolums={newVolums}/>
   <Granos allGrains={allGrains} volumenes={volumenes} />
    </div>
  );
}

export default Calculador;
