import React, { useState } from 'react';


function Granos(props) {
    const granos = props.allGrains
    const volumenes= props.volumenes
    
    const [unidadDeConversion, setUnidadDeConversion]=useState({multiploGranos:1,multiploLupulo:1})
    const [unidadOriginal, setUnidadOriginal]= useState({unidadOriginalGranos:String, unidadOriginalLupulos:String})

    const [conversorEngaged, setConversorEngaged]= useState(false)
    
    let coeficienteConversionVolumen
    if(volumenes.newBatchSize === 0){
      coeficienteConversionVolumen=1
    }else{coeficienteConversionVolumen=volumenes.newBatchSize/volumenes.originalBatchSize}
console.log(coeficienteConversionVolumen);


  /*
  let coeficienteConversionVolumen 
   coeficienteConversionVolumen= nuevoVolumen/volumenOriginal
 */


 function elegirUnidades(event) {
    const unidadOriginal= event.target.name
    if (unidadOriginal ==="kg"){
      setUnidadOriginal({unidadOriginalGranos:"kg", unidadOriginalLupulos:"gr"})
    }
    if (unidadOriginal ==="lbs"){
      setUnidadOriginal({unidadOriginalGranos:"lbs", unidadOriginalLupulos:"oz"})
    }
  }

 function convertirUnidades(event) {
    const unidadConvertida= event.target.name
    setConversorEngaged(true)
       
    if (unidadConvertida ==="kg") {
      setUnidadDeConversion({multiploGranos:0.45359237, multiploLupulo: 28.35})
     setUnidadOriginal({unidadOriginalGranos:"kg", unidadOriginalLupulos:"gr"})
    }
    if (unidadConvertida==="lbs") {
      setUnidadDeConversion({multiploGranos:2.20462, multiploLupulo:0.0352733686})
      setUnidadOriginal({unidadOriginalGranos:"lbs", unidadOriginalLupulos:"oz"})      
    } 
  }  
    
  return (
    <div>
    <h3>Elegir unidad a convertir:</h3>
  <button onClick={elegirUnidades} name="kg">KG</button>
  <button onClick={elegirUnidades} name="lbs">LBS</button>


    <h1>Titulo:  {granos.map( grano=>{return  grano.titulo })}</h1>




     <h1>Original batch size:{volumenes.originalBatchSize}  </h1>

     <h1>Batch size:  {volumenes.newBatchSize}</h1>
    
  
<h2>Granos</h2>
     {granos.map(grano=>{
     if (grano.nombreGrano ===""){return <p></p>}
     else {return <div>
       <div><p>Grano: {grano.nombreGrano} Cantidad grano: {grano.cantidadGrano *unidadDeConversion.multiploGranos*coeficienteConversionVolumen} {unidadOriginal.unidadOriginalGranos}</p></div>     
     </div>
       }})}  
       <h2>Lupulos</h2>
        {granos.map(grano=>{
        if (grano.nombreLupulo ===""){return <p></p>}
        else{return <div>
              <div><p>Lupulo: {grano.nombreLupulo} Cantidad Lupulo: {grano.cantidadLupulo *unidadDeConversion.multiploLupulo*coeficienteConversionVolumen} {unidadOriginal.unidadOriginalLupulos}</p></div>     
            </div>
              }})} 

              
  {conversorEngaged ? null : <div><h3>Convertir a:</h3>
  <button onClick={convertirUnidades} name="kg">KG</button>
  <button onClick={convertirUnidades} name="lbs">LBS</button>
  </div> 
  }


  </div>
  
  );
 
}

export default Granos;
