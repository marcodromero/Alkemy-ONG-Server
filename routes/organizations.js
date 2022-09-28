const express = require("express");
const { getOrganization } = require("../controllers/organizations");
const router = express.Router();

router.get("/", getOrganization);

module.exports = router;