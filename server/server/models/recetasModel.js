const mongoose = require("../bin/mongodb");

const recetasSchema= new mongoose.Schema({
    titulo:{type:String,/*required:true,*/minlength:3},
    grano:{nombreGrano:String, cantidadGrano:Number},
    lupulo:{nombreLupulo:String, cantidadLupulo:Number}, 
    levadura:{type:String,/*required:true*/}
});

module.exports =mongoose.model("recetas", recetasSchema)