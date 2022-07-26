import React, {useEffect, useState} from 'react';
const axios = require('axios');

function Recetas() {
   
    const [recetas, setRecetas]=useState([]) 
    
    
    useEffect(()=>{ 
        axios.get("http://localhost:3000/recetas")
  .then(function (response) {
    // handle success
    setRecetas(response.data)
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
        
       /*
        fetch("http://localhost:3000/recetas")
        .then(res=>res.json())
        .then(result=>{ 
            setRecetas(result)             
        }) 
        */     
    
    },[])

    /*
     
let datosImprimir

   recetas.map(receta=>{
    const keys = Object.keys(receta);
    
    keys.forEach((key, index) => {
      
      datosImprimir=(`${key}: ${receta[key]}`)
   console.log(datosImprimir);
});

 }) 
 */
 /*
 recetas.map(receta=> {
  Object.entries(receta).forEach(([key, value]) => 
  [key, value].map(x=>{console.log(key,value)})
  );
})
   */


    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
              {recetas.map(receta=>{
                   return <div>
       <div><h2>Titulo {receta.titulo}</h2> <p> grano: {receta.grano.nombreGrano} cantidad: {receta.grano.cantidadGrano}</p><p>lupulo:{receta.lupulo.nombreLupulo} cantidad:{receta.lupulo.cantidadLupulo}</p></div>     
     </div>
       })}  
        <h1>Imprimir datos</h1>
       
      {
        
      }

           

        </div>
     );
}

export default Recetas;