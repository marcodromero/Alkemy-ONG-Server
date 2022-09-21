const {Testimonial} = require('../models');
const createTestimonial = async (req, res, _next) => {
    const {name, image, content } = req.body;
    const testimonial = await Testimonial.create({name, image, content});
    res.send(testimonial);
}
const deleteTestimonial = async (req, res, _next) => {
    const {id} = req.params;
    const testimonial = await Testimonial.findOne({where: {id}});
    if(!testimonial) {
        res.status(404).send('Testimonial not found');
    }else{
        try{
            await testimonial.destroy();
            res.status(200).send('Testimonial deleted');
        }catch(err){
            res.status(500).send('Error deleting testimonial');
        }
    }
}
module.exports = {createTestimonial, deleteTestimonial}
    