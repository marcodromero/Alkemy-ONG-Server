const express = require("express");
const { createNews,findAllNews } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();

router.post("/", validatorHandler(newsFieldsValidation), createNews);

router.get('/', findAllNews);


module.exports = router


