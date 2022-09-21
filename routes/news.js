const express = require('express');
const { detailNews } = require('../controllers/news');
const router = express.Router();


router.get("/:id", detailNews)

module.exports = router