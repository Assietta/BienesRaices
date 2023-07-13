const getAllAppraisalsController = require("../controllers/getAllAppraisalsController");

const getAllAppraisalsHandler = async (req, res) => {
    try {
        const appraisals = await getAllAppraisalsController()

    return res.status(200).json(appraisals);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAppraisalsHandler,
};
