import React, { useState } from 'react';


function InputGranos(props) {

    const [granoIngresado, setGranoIngresado]= useState({titulo:"",nombreGrano:"", cantidadGrano:0, nombreLupulo:"",cantidadLupulo:0})

    const[volums, setVolums]=useState({originalBatchSize:0,newBatchSize:0})

    const[hayTitulo,setHayTitulo]=useState(false)
    const[hayVolumen,setHayVolumen]=useState(false)
    const[inputStyle, setInputStyle]= useState({display:"block"})
 
function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    if(name==="originalBatchSize" || name=== "newBatchSize"){
     
      setVolums(prevVal=>{return {...prevVal,[name]:value}}) 
    }else
    
      setGranoIngresado(prevVal=>{return {...prevVal,[name]:value}})        
    
}



function submitear(event) {
  props.newVolums(volums)
  
  props.newGrain(granoIngresado)

    event.preventDefault();

      setGranoIngresado({titulo:"",nombreGrano:"", cantidadGrano:0,nombreLupulo:"",cantidadLupulo:0})
      
      if (granoIngresado.titulo !==""){setHayTitulo(true)}
     if(volums.originalBatchSize !==0){setHayVolumen(true)}
     if(volums.newBatchSize!==0){
      setInputStyle({display:"none"}) 
      ;}
         
}



  return (
    <div class="p-20"> 
    
     <form class=" mx-auto space-y-4  " >
      {hayTitulo ? null : <div class="mb-5 space-x-4"><label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"  htmlFor="titulo">Titulo:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={granoIngresado.titulo} name="titulo" type="text" onChange={handleChange}/> </div>}

    {hayVolumen ? <div class="mb-5 space-x-4" style={inputStyle} ><label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="newBatchSize">New batch size:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={volums.newBatchSize} name="newBatchSize" type="number" onChange={handleChange}/><span>gal</span></div> :<div class="space-x-4"><label htmlFor="originalBatchSize">Original batch size:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={volums.originalBatchSize} name="originalBatchSize" type="number" onChange={handleChange}/><span>gal</span></div>}
<div class="mb-5 space-x-4">
  <label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="grano">Grano:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={granoIngresado.nombreGrano} name="nombreGrano" type="text" onChange={handleChange}/>
   <label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="granoCantidad">Cantidad:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={granoIngresado.cantidadGrano} name="cantidadGrano" type="number" onChange={handleChange}/>
   </div>
   <div class="mb-5 space-x-4">
   <label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="lupulo">Lupulo:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={granoIngresado.nombreLupulo} name="nombreLupulo" type="text" onChange={handleChange}/>
   <label  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="lupuloCantidad">Cantidad lupulo:</label>
   <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" value={granoIngresado.cantidadLupulo} name="cantidadLupulo" type="number" onChange={handleChange}/>
   </div>
   <button onClick={submitear} type="submit">Calcular</button>
  </form>
  
    </div>
  );
}


export default InputGranos;
