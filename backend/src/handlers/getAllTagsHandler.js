const getAllTagsController = require('../controllers/getAllTagsController')

const getAllTagsHandler = async(req, res) => {
    try {
        const tags = await getAllTagsController()

        return res.status(200).json(tags)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllTagsHandler
}