const express = require("express");
const jwt = require("jsonwebtoken");
const { registerUser, loginUser } = require("../controllers/users");
const {registerValidator, loginValidator} = require('../validators/users')
const router = express.Router();

router.post("/register", registerValidator, registerUser);

router.post("/login", loginValidator, loginUser);

module.exports = router;
