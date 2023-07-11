const { Appraisal } = require('../db')

const getAllAppraisalsController = async() => {
    const appraisals = await Appraisal.findAll()

    if(!appraisals) throw new Error('No existe ninguna tasacion')

    return appraisals
}

module.exports = getAllAppraisalsController