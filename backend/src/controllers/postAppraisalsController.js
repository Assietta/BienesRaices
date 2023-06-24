const { Appraisal } = require("../db")

const postAppraisalsController = async(name, lastName, email, phone, mobile, comment, address, callTime) => {
    const appraisal = await Appraisal.create({name, lastName, email, phone, mobile, comment, address, callTime})

    return appraisal
}


module.exports = postAppraisalsController