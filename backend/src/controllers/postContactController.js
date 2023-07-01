const { Contact } = require("../db")

const postContactController = async(name, lastName, email, phone, mobile, comment) => {
    const contact = await Contact.create({name, lastName, email, phone, mobile, comment})

    return contact
}


module.exports = postContactController