var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

///agregado por mi
router.get('/list', userController.list);
router.get('/search', userController.search);
module.exports = router;
