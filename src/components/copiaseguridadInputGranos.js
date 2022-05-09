import React, { useState } from 'react';


function InputGranos(props) {

    const [granoIngresado, setGranoIngresado]= useState({titulo:"",nombreGrano:"", cantidadGrano:0, nombreLupulo:"",cantidadLupulo:0})

  const[hayTitulo,setHayTitulo]=useState(false)
   

function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
     if (name==="titulo"){
          setGranoIngresado(prevVal=>{return {...prevVal,titulo:value}})
     }
        if(name ==="grano"){
            setGranoIngresado(prevVal=>{return {...prevVal,nombreGrano:value}})
        }       
        if (name==="granoCantidad" && value!==0){
            setGranoIngresado(prevVal=>{return {...prevVal,cantidadGrano:value}})
        }
         if(name ==="nombreLupulo"){
            setGranoIngresado(prevVal=>{return {...prevVal,nombreLupulo:value}})
        }     
        if (name==="cantidadLupulo" && value!==0){
            setGranoIngresado(prevVal=>{return {...prevVal,cantidadLupulo:value}})  
    
}
}

function submitear(event) {
  
  props.newGrain(granoIngresado)

    event.preventDefault();
      setGranoIngresado({titulo:"",nombreGrano:"", cantidadGrano:0,nombreLupulo:"",cantidadLupulo:0})
      if (granoIngresado.titulo !==""){setHayTitulo(true)}
     
      console.log(hayTitulo);
      
}

  return (
    <div > 
     <form  >
      {hayTitulo ? <></> : <><label  for="titulo">Titulo:</label>
   <input value={granoIngresado.titulo} name="titulo" type="text" onChange={handleChange}/> </>}
    
  <label for="grano">Grano:</label>
   <input value={granoIngresado.nombreGrano} name="grano" type="text" onChange={handleChange}/>
   <label for="granoCantidad">Cantidad:</label>
   <input value={granoIngresado.cantidadGrano} name="granoCantidad" type="number" onChange={handleChange}/>
   <label for="lupulo">Lupulo:</label>
   <input value={granoIngresado.nombreLupulo} name="nombreLupulo" type="text" onChange={handleChange}/>
   <label for="lupuloCantidad">Cantidad lupulo:</label>
   <input value={granoIngresado.cantidadLupulo} name="cantidadLupulo" type="number" onChange={handleChange}/>
   <button onClick={submitear} type="submit">Calcular</button>
  </form>
    </div>
  );
}
  /*
          if (grano.nombreGrano ===""){return <p> {grano.titulo} Lupulo: {grano.nombreLupulo} Cantidad Lupulo: {grano.cantidadLupulo}</p>}
          if (grano.nombreLupulo ===""){return <p>{grano.titulo}  Grano: {grano.nombreGrano} Cantidad grano: {grano.cantidadGrano}</p>}
           if (grano.nombreLupulo !=="" && grano.nombreGrano !==""){return <p>{grano.titulo}  Grano: {grano.nombreGrano} Cantidad grano: {grano.cantidadGrano} Lupulo: {grano.nombreLupulo} Cantidad Lupulo: {grano.cantidadLupulo}</p>}
    */

    /*
     {granos.map(grano=>{return <p> {grano.titulo}  Grano: {grano.nombreGrano} Cantidad grano: {grano.cantidadGrano} Lupulo: {grano.nombreLupulo} Cantidad Lupulo: {grano.cantidadLupulo}</p>})}
      */


export default InputGranos;
