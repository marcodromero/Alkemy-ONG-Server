var express = require('express');
const { getUsers } = require('../controllers/users');
const verifyRole = require('../middlewares/verifyRole');
var router = express.Router();

/* GET users listing. */
router.get('/',verifyRole ,getUsers);

module.exports = router;
