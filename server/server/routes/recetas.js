var express = require('express');
var router = express.Router();

const  recetasController=require("../controllers/recetasController")

/*validate user disabled en post*/

/* GET home page. */
router.get('/', recetasController.getAll);
router.post('/',/*(req,res,next)=>{req.app.validateUser(req,res,next)},*/recetasController.create);
router.get('/:id', recetasController.getById);
router.put('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)},recetasController.update);
router.delete('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, recetasController.delete);

module.exports = router;
