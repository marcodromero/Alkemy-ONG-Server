const express = require("express");
const { updateNews } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();

router.put("/:id", validatorHandler(newsFieldsValidation), updateNews);

module.exports = router;
