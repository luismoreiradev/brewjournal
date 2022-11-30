function RecetaEnParticular(props) {

    const data = props.datos
    return ( 
        <div>
       <p>{props.datos.titulo}</p>
       <p>{props.datos.cantidadGrano1}</p>
       {Object.keys(data).map((key, index) => {
        return (
          <div key={index}>
            <h2>
              {key}: {data[key]}
            </h2>

            <hr />
          </div>
        );
      })}

        </div>
     );
}

export default RecetaEnParticular;