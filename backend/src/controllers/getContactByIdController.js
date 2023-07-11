const { Contact } = require('../db')

const getContactByIdController = async(email) => {
    const contact = await Contact.findAll({ where: { email } })

    return contact;
};

module.exports = {
    getContactByIdController
};