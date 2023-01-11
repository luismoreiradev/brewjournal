import React, {useEffect, useState} from 'react';

import { useHistory } from "react-router-dom";
import RecetaEnParticular from '../components/RecetaEnParticular';
const axios = require('axios');


function Recetas() {
   
    const [recetas, setRecetas]=useState([]) 
    const [particular, setParticular]= useState([])
    const [mostrar,setMostrar]= useState(false)
       
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
      let path = `/PaginaRecetaEnParticular`; 
      history.push(path);
      
    };
    
    
    
    function detalles(receta) {     
    setMostrar(!mostrar)
    
    
      axios.get("http://localhost:3000/recetas/"+receta)
  .then(function (response) {
    // handle success
    setParticular(response.data)
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })  
  
    }
  
    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
         <div>
             <RecetaEnParticular datos={particular}/>
             
            </div>
      

            <div style={{padding:"50px"}}>
            {mostrar  ? false :
          recetas.map(receta => {
            return Object.entries(receta).map(([recetaName, receta]) => {              
              if (recetaName === "titulo") {                
                return <div style={{  }} >
                  <h1> Titulo:<span>{receta}</span></h1>        
              </div>
              } if ( recetaName === "_id") {                                
                return    <div style={{position:"relative",top:"100px"}} >           
                <button onClick={()=>{detalles(receta)} }>detalles</button>
                </div>
              }
                            
             });
                })
        }
        
</div>
{/*      
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
        } */}
       
     
           

        </div>
     );
}

export default Recetas;