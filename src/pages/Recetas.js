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
        
    
    },[])



    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
              {recetas.map(receta=>{
                   return <div>
       <div><h2>Titulo {receta.titulo}</h2> <p>{receta.grano.map(grain=>{return <span> grano: {grain.nombreGrano} cantidad:{grain.cantidadGrano}</span> })} </p>
       <p>{receta.lupulo.map(hop=>{return <span> lupulo: {hop.nombreLupulo} cantidad:{hop.cantidadLupulo}</span>})}</p>
      </div>     
     </div>
       })}  
        <h1>Imprimir datos</h1>
       
      {
        
      }

           

        </div>
     );
}

export default Recetas;