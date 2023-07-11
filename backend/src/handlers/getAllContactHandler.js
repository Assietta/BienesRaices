const getAllContactController = require('../controllers/getAllContactsController')

const getAllContactHandler = (req, res) => {
    try {
        const contacts = getAllContactController()

        return res.status(200).json(contacts)
    } catch (error) {
        return res.status(500).json({contacts})
    }
}

module.exports = {
    getAllContactHandler
}