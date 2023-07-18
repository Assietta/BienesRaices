const { Testimonial } = require('../db')

const getTestimonialController = async() => {
    const testimonial = await Testimonial.findAll()

    return testimonial
}

module.exports = getTestimonialController