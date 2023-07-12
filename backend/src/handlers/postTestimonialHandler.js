
const postTestimonialController = require('../controllers/postTestimonialController');
const postTestimonialHandler = async(req, res) => {
    try {
        const { username, text, rating, userId } = req.body
        const testimonial = await postTestimonialController( username, text, rating, userId ) ;
        return res.status(200).json(testimonial)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postTestimonialHandler
};