var express = require('express');
var router = express.Router();
const {getAllCategories, updateCategory} = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

router.put('/:id', updateCategory);

module.exports = router;