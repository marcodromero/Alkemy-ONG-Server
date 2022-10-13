var express = require('express');
const verifyRole = require('../middlewares/verifyRole')
const { createTestimonial, deleteTestimonial, updateTestimonial, getAllTestimonials } = require('../controllers/testimonials')
const { testimonialValidator } = require('../validators/testimonials')
var router = express.Router();
router.post('/', verifyRole, testimonialValidator, createTestimonial);
router.put('/:id', verifyRole, updateTestimonial);
router.delete('/:id', verifyRole, deleteTestimonial);
router.get("/", getAllTestimonials)
module.exports = router;