var express = require('express');
const verifyRole = require('../middlewares/verifyRole')
const {createTestimonial, deleteTestimonial} = require('../controllers/testimonials')
const { testimonialValidator } = require('../validators/testimonials')
var router = express.Router();
router.post('/', verifyRole , testimonialValidator,  createTestimonial);
router.delete('/:id', verifyRole , deleteTestimonial);

module.exports = router;
