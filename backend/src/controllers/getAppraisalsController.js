const { Appraisal } = require('../db')

const getAppraisalsController = async(userId) => {
    const appraisals = await Appraisal.findAll({ where: { userId } })

    return appraisals
}

module.exports = getAppraisalsController