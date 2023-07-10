const { Appraisal } = require("../db")

const postAppraisalsController = async(name, lastName, email, phone, mobile, comment, address, callTime, userId) => {
    const appraisal = await Appraisal.create({name, lastName, email, phone, mobile, comment, address, callTime, userId})

    return appraisal
}


module.exports = postAppraisalsController