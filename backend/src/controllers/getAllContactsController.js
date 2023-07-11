const { Contact } = require('../db')

const getAllContactController = async() => {
    const contacts = await Contact.findAll()

    return contacts
}

module.exports = getAllContactController