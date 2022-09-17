const express = require('express');
const router = express.Router();
const {createContact} = require('../controllers/contacts')
/* GET home page. */
router.post('/', createContact);

module.exports = router;
