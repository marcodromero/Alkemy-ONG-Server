const { check } = require("express-validator");
const { validateResult } = require('../helpers/validateResult')
const createValidator = [
    check("name").exists().isString().notEmpty(),
    check("image").isString().default("https://via.placeholder.com/150"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { createValidator };