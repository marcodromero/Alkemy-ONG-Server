
const express = require("express");
const { updateNews,createNews,findAllNews,detailNews  } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();


router.put("/:id", validatorHandler(newsFieldsValidation), updateNews);

router.get("/:id", detailNews)

router.post("/", validatorHandler(newsFieldsValidation), createNews);

router.get('/', findAllNews);


module.exports = router;



