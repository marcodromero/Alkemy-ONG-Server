var express = require('express');
var router = express.Router();
const {getAllCategories, addCategory, updateCategory} = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

router.put('/:id', updateCategory);
router.post('/', addCategory);

module.exports = router;