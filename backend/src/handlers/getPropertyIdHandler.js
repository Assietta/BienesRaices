const getPropertyIdController = require('../controllers/getPropertyIdCotroller')

const getPropertyIdHandler = async(req, res) => {
    try {
        const { id } = req.params

        const propertyById = await getPropertyIdController(id)

        return res.status(200).json(propertyById)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getPropertyIdHandler