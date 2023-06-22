const { getRealState } = require('../controllers/contrealState.js');

const realStateHandler = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  try {
    const apiResponse = await getRealState(req, page, limit);
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  realStateHandler
};
