const getTestimonialController = require('../controllers/getTestimonialsController');

const getTestimonialsHandler = async(req, res) => {
    try {
        const testimonials = await getTestimonialController()

        return res.status(200).json(testimonials)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getTestimonialsHandler
}