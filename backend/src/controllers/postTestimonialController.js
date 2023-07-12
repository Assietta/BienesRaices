const { Testimonial } = require("../db")

const postTestimonialController = async( username, text, rating, userId) => {

      const testimonial = await Testimonial.create({
        text,
        username,
        rating,
        userId
      });
    return testimonial;
  };


module.exports = postTestimonialController