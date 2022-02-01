var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.getHomePage )

router.post('/', indexController.createNewUrl)

module.exports = router;
