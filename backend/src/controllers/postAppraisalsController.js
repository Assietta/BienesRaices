const { Appraisal } = require("../db")

const postAppraisalController = async(name, lastName, email, phone, mobile, comment, address, callTime) => {
    const appraisal = await Appraisal.create({name, lastName, email, phone, mobile, comment, address, callTime})

    return appraisal
}


module.exports = postAppraisalController