const { User } = require('../db')

const deleteUserController = async(id) => {
    await User.destroy({ where: { id }})
};

module.exports = deleteUserController