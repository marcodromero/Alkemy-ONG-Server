const express = require("express");
const { createActivity, updateActivity } = require("../controllers/activities");
const { createValidator } = require("../validators/activities")
const router = express.Router();

router.post("/", createValidator, createActivity);
router.put("/:id", updateActivity);

module.exports = router;