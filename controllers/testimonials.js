const { Testimonial } = require("../models");
const createTestimonial = async (req, res, _next) => {
  const { name, image, content } = req.body;
  const testimonial = await Testimonial.create({ name, image, content });
  res.send(testimonial);
};
const updateTestimonial = async (req, res, _next) => {
  const { id } = req.params;
  const { name, image, content } = req.body;
  try {
    const update = await Testimonial.update(
      {
        name,
        image,
        content,
      },
      {
        where: { id: id },
      }
      );
    res.status(200).send({
      data: { name, image, content },
    });
  } catch (error) {
    res.status(400).send({ error:error });
  }
};
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



module.exports = {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};