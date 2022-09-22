const {Testimonial} = require('../models');
const createTestimonial = async (req, res, _next) => {
    const {name, image, content } = req.body;
    const testimonial = await Testimonial.create({name, image, content});
    res.send(testimonial);
}

module.exports = {createTestimonial}
    