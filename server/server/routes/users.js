var express = require('express');
var router = express.Router();

const users= require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('aca van los users services');
});

router.post("/",users.create)
router.post("/login",users.login)

module.exports = router;
