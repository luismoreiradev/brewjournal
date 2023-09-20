var express = require('express');
var router = express.Router();

const  coccionesController=require("../controllers/coccionesController")

/*validate user disabled en post*/

/* GET home page. */
router.get('/', coccionesController.getAll);
router.post('/',/*(req,res,next)=>{req.app.validateUser(req,res,next)},*/coccionesController.create);
router.get('/:id', coccionesController.getById);
router.put('/:id',/* (req,res,next)=>{req.app.validateUser(req,res,next)},*/coccionesController.update);
router.delete('/:id',/*(req,res,next)=>{req.app.validateUser(req,res,next)},*/ coccionesController.delete);

module.exports = router;
