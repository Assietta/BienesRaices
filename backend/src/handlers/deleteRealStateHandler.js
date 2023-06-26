const deleteRealStateController = require('../controllers/deleteRealStateController')

const deleteRealStateHandler = async(req, res) => {
    try {
        const { id } = req.params
        await deleteRealStateController(id)

        return res.status(200).send('Real State deleted')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = { deleteRealStateHandler }