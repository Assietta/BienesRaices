const deleteUserController = require('../controllers/deleteUserController')

const deleteUserHandler = async(req, res) => {
    try {
       const { id } = req.params

        await deleteUserController(id)

        return res.status(200).send('User eliminated')
    } catch (error) {
        return res.status(500).send('User cannot be eliminated')
    }
    
}

module.exports = {
    deleteUserHandler
};