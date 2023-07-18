const { getContactByIdController } = require('../controllers/getContactByIdController')

const getContactByIdHandler = async (req, res)=> {
    try {
        const { userId } = req.params

        const contact = await getContactByIdController(userId)

        return res.status(200).json(contact)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    getContactByIdHandler
};