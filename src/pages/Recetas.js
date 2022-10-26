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
/*
recetas.forEach(element => {
  for (const [key, val] of Object.entries(element)) {
    console.log(key, val)
  }
  
});
*/


/*
  {
          recetas.map(receta => {
            return Object.entries(receta).map(([recetaName, receta]) => (
              <div >          
              <span>{recetaName}: {receta}</span>
              </div>      
                    ));
                })
        }
        */


    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
             
       
        {
          recetas.map(receta => {
            return Object.entries(receta).map(([recetaName, receta]) => {
              if (recetaName === "titulo") {
                return <h2> Titulo: {receta}</h2>
              }
              if (recetaName.slice(0,3) === "gra") {
                return <h2> Grano: {receta} </h2>
              }
              if (recetaName.slice(0,9) === "cantidadG") {
                return <h2 > Cantidad del grano: {receta}kg</h2>
              }
              if (recetaName.slice(0,3) === "lup") {
                return <h2 > Lupulo: {receta}</h2>
              }
              if (recetaName.slice(0,9) === "cantidadL") {
                return <h2 > Cantidad del lupulo: {receta}gr</h2>
              }
              if (recetaName === "__v" || recetaName === "_id") {
                return <span > </span>
              }
              else{ return(             
                <div >          
                <span>{recetaName}: {receta}</span>
                </div>      
                      )}
             });
                })
        }
       
     
           

        </div>
     );
}

export default Recetas;