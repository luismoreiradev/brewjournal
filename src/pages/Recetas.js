import React, {useEffect, useState} from 'react';

import { useHistory } from "react-router-dom";
import RecetaEnParticular from './RecetaEnParticular';
const axios = require('axios');


function Recetas() {
   
    const [recetas, setRecetas]=useState([]) 
    const [particular, setParticular]= useState([])
    
    
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

  
    const history = useHistory();
    const navigateToRecetaEnParticular = () => {
      let path = `/recetaenparticular`; 
      history.push(path);
      
    };
  
   


    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
             

            {
          recetas.map(receta => {
            return Object.entries(receta).map(([recetaName, receta]) => {
              if (recetaName === "titulo") {
                
                return <div>
                  <h1> Titulo:</h1>
             <a href='http://localhost:3000/recetas/631763fc62f42fe3c0bf626e'>ir a receta</a>
             
              </div>
              } if ( recetaName === "_id") {
                
                return <div>
                  <span >{receta} </span>
                  <button onClick={navigateToRecetaEnParticular}>receta especifica</button>
                 
                  <a href={'http://localhost:3000/recetas/'+receta}>en trabajo</a>
                
                </div>
              }
              
             });
                })
        }

       
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