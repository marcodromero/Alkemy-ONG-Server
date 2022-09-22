var express = require('express');
const verifyRole = require('../middlewares/verifyRole')
const {createTestimonial} = require('../controllers/testimonials')
const { testimonialValidator } = require('../validators/testimonials')
var router = express.Router();
router.post('/', verifyRole , testimonialValidator,  createTestimonial);

module.exports = router;
