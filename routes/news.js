
const express = require("express");
const { updateNews,findAllNews  } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();

router.put("/:id", validatorHandler(newsFieldsValidation), updateNews);

router.get('/', findAllNews);


module.exports = router;

