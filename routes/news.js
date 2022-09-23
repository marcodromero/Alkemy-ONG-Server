const express = require('express');
const { detailNews } = require('../controllers/news');
const router = express.Router();


router.get("/:id", detailNews)

module.exports = router


const router = express.Router();
const { findAllNews } = require('../controllers/news');

router.get('/', findAllNews);


module.exports = router;


