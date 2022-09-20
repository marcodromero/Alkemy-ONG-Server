const express = require("express");
const { createActivity } = require("../controllers/activities");
const { createValidator } = require("../validators/activities")
const router = express.Router();

router.post("/", createValidator, createActivity);

module.exports = router;