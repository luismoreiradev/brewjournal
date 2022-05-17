import React, {useEffect, useState} from 'react';
const axios = require('axios');

function Recetas() {
   
    const [recetas, setRecetas]=useState([]) 
    
    useEffect(()=>{ 
        axios.get("http://localhost:3000/recetas")
  .then(function (response) {
    // handle success
    setRecetas(response.data)
    console.log(recetas);
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

    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
             <h1> {recetas.map( receta=>{return  receta.titulo })}</h1>
        </div>
     );
}

export default Recetas;