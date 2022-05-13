import React, {useEffect, useState} from 'react';

function Recetas() {
   
    const [recetas, setRecetas]=useState([])

    
 
    
    useEffect(()=>{         
        
        
        fetch("http://localhost:3000/recetas")
        .then(res=>res.json())
        .then(result=>{ 
            setRecetas(result)             
        }) 
               
    },[])

 console.log(recetas);
   

                     
   

    
    return ( 
        
        <div>
            <h1>Libro de recetas</h1>
             <h1> {recetas.map( receta=>{return  receta.titulo })}</h1>
             
           
        </div>
     );
}

export default Recetas;