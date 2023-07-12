const { Contact } = require('../db')

const getContactByIdController = async(userId) => {
    const contact = await Contact.findAll({ where: { userId } })

    return contact;
};

module.exports = {
    getContactByIdController
};