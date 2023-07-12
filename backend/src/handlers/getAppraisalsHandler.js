const getAppraisalsController = require('../controllers/getAppraisalsController')

const getAppraisalsHandler = async (req, res)=> {
    try {
        const { userId } = req.params

        const appraisals = await getAppraisalsController(userId)
        console.log(appraisals);
        return res.status(200).json(appraisals)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAppraisalsHandler
}