var express = require('express');
var router = express.Router();

//import controller
const prodiController = require('../controllers/prodiController')

// route
router.get('/', prodiController.index)

module.exports = router;