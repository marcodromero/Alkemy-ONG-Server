const express = require('express');
const { deleteNews } = require('../controllers/news');
const router = express.Router();


router.delete('/:id', deleteNews);



module.exports = router