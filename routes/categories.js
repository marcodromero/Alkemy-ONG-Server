var express = require('express');
var router = express.Router();
const {getAllCategories, addCategory} = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

router.post('/', addCategory);

module.exports = router;