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
module.exports = {
  createTestimonial,
  updateTestimonial,
};
