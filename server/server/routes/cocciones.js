var express = require('express');
var router = express.Router();

const  coccinesController=require("../controllers/coccinesController")

/*validate user disabled en post*/

/* GET home page. */
router.get('/', coccinesController.getAll);
router.post('/',/*(req,res,next)=>{req.app.validateUser(req,res,next)},*/coccinesController.create);
router.get('/:id', coccinesController.getById);
router.put('/:id',/* (req,res,next)=>{req.app.validateUser(req,res,next)},*/coccinesController.update);
router.delete('/:id',/*(req,res,next)=>{req.app.validateUser(req,res,next)},*/ coccinesController.delete);

module.exports = router;
