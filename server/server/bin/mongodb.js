const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/breweryDB', {useNewUrlParser: true,
useUnifiedTopology: true},function (error) {if (error) {throw error;    
}else {console.log("conexion a mongodb exitosa")}
    
}
);
module.exports= mongoose;

