import React, {useEffect, useState} from 'react';

import { useHistory } from "react-router-dom";
import RecetaEnParticular from '../components/RecetaEnParticular';
const axios = require('axios');


function HistorialDeCocciones() {
    const [recetas, setRecetas]=useState([]) 
    const [particular, setParticular]= useState([])
    const [mostrar,setMostrar]= useState(false)
    const [verBoton, setVerBoton]= useState({display:"none"})
       
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
    setMostrar({display:"block"})
    setVerBoton({display:"block"})
    
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
             <RecetaEnParticular datos={particular} verBoton={verBoton}/>
            
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
        

        </div>
     );
}

export default HistorialDeCocciones;