const { Contact } = require('../db')

const getContactByIdController = async(userId) => {
    const appraisals = await Contact.findOne({ where: { userId } })

    return appraisals;
};

module.exports = getContactByIdController