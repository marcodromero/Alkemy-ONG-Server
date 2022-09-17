const express = require('express');
const router = express.Router();
const {createContact, getContacts} = require('../controllers/contacts')
const {contactValidator} = require('../validators/contacts')
const verifyRole = require('../middlewares/verifyRole')
/* GET home page. */
router.post('/', contactValidator ,createContact);
router.get('/' , verifyRole, getContacts)

module.exports = router;
