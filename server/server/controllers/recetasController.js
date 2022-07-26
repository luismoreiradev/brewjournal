const recetasModel = require("../models/recetasModel");

module.exports={
    
 getAll:async function (req,res,next) {
     try{
   const document =await recetasModel.find();
    res.json(document)
    } catch(e){
            console.log(e);
            next(e)
      } 
   
    },
    
    create:async function (req, res, next) {
        try{
 const recetas = new recetasModel({
    titulo:req.body.titulo,
    grano:{nombreGrano:req.body.grano.nombreGrano, cantidadGrano:req.body.grano.cantidadGrano},
    lupulo:{nombreLupulo:req.body.lupulo.nombreLupulo, cantidadLupulo:req.body.lupulo.cantidadLupulo},
    levadura:req.body.levadura
        })
     const document = await  recetas.save()
     res.json(document)
        }
      catch(e){
            console.log(e);
            if(e.message){
              res.json({status:"errors", message:e.message})
              return
            }
            next(e)
      } 
     
    },
     getById:async function (req,res,next) {
     try{
   const document =await recetasModel.findById(req.params.id);
    res.json(document)
    } catch(e){
            console.log(e);
            next(e)
      } 
   
    },
     update:async function(req, res, next) {
        try{          
            const document = await recetasModel.updateOne({_id:req.params.id},req.body)
            res.json(document)
        }catch(e){
              next(e)
        }
      },
       delete: async function(req, res, next) {
          try{
             const document = await recetasModel.deleteOne({_id:req.params.id})
            res.json(document)
          }catch(e){
            next(e)
          }
      }
}