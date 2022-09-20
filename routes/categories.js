var express = require('express');
var router = express.Router();
const {getAllCategories, deleteCategory} = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

router.delete('/:id', deleteCategory);

module.exports = router;