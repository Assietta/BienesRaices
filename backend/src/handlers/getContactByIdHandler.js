const { getContactByIdController } = require('../controllers/getContactByIdController')

const getContactByIdHandler = async (req, res)=> {
    try {
        const { email } = req.params

        const contact = await getContactByIdController(email)

        return res.status(200).json(contact)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    getContactByIdHandler
};