const express = require("express");
const { createActivity, updateActivity, getActivity, getActivities } = require("../controllers/activities");
const { createValidator } = require("../validators/activities")
const router = express.Router();

router.get('/:id', getActivity)
router.get('/', getActivities)
router.post("/", createValidator, createActivity);
router.put("/:id", updateActivity);

module.exports = router;