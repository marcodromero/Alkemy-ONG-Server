const express = require("express");
const { createNews } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();

router.post("/", validatorHandler(newsFieldsValidation), createNews);
