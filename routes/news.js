
const express = require("express");
const { createNews,findAllNews,detailNews } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");



router.get("/:id", detailNews)

router.post("/", validatorHandler(newsFieldsValidation), createNews);

router.get('/', findAllNews);


module.exports = router



