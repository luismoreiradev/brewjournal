import { useHistory } from "react-router-dom";

function RecetaEnParticular(props) {

  const history = useHistory();
  const navigateToRecetas = () => {
    let path = `/recetas`; 
    history.push(path);
    window.location.reload(false);
    };

    let data = props.datos
    
    return ( 
        <div>
          
      {
      Object.keys(data).map((key, index) => {
        if(key==="_id" || key==="__v"){
          return(
            <span></span>
          )
        }else{ return (
          <div key={index}>
            <h2>
              {key}: {data[key]}
            </h2>

          
          </div>
        );}
       
      })}

     <button style={props.verBoton} onClick={navigateToRecetas}>volver a recetas</button>
           
        </div>
     );
}

export default RecetaEnParticular;