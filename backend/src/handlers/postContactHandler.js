const postContactController = require('../controllers/postContactController')

const postContactHandler = async(req, res) => {
    try {
        const { name, lastName, email, phone, mobile, comment } = req.body

        const ContactPosted = await postContactController(name, lastName, email, phone, mobile, comment)

        return res.status(200).json(ContactPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    postContactHandler
};