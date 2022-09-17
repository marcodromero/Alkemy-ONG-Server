var express = require('express');
var router = express.Router();
const {getAllCategories} = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

module.exports = router;