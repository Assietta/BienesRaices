const { Contact } = require('../db')

const getContactByIdController = async(email) => {
    const contact = await Contact.findOne({ where: { email } })

    return contact;
};

module.exports = {
    getContactByIdController
};