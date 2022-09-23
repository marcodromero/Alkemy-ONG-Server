const express = require('express');
const { deleteNews,findAllNews } = require('../controllers/news');
const router = express.Router();


router.delete('/:id', deleteNews);
router.get('/', findAllNews);


module.exports = router;

