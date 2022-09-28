var express = require('express');
const verifyRole = require('../middlewares/verifyRole')
const {createTestimonial, updateTestimonial} = require('../controllers/testimonials')
const { testimonialValidator } = require('../validators/testimonials')
var router = express.Router();
router.post('/', verifyRole , testimonialValidator,  createTestimonial);
router.put('/:id' , verifyRole, updateTestimonial )

module.exports = router;
