const {postAppraisalsController} = require('../controllers/postAppraisalsController');


const postAppraisalsHandler = async(req, res) => {
    try {
        const { name, lastName, email, phone, mobile, comment, address, callTime} = req.body

        const AppraisalPosted = await postAppraisalsController(name, lastName, email, phone, mobile, comment, address, callTime)

        return res.status(200).json(AppraisalPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    postAppraisalsHandler
};