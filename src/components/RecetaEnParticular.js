function RecetaEnParticular(props) {

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
           
        </div>
     );
}

export default RecetaEnParticular;