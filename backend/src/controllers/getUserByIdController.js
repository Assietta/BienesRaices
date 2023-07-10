const { User } = require('../db')

const getUserByIdController = async(id) => {
    const user = await User.findOne({ where: { id } })

    return user;
}

module.exports = { getUserByIdController };