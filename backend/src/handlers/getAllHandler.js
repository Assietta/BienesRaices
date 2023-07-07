const { getRealState } = require('../controllers/getAllController.js');

const realStateHandler = async (req, res) => {
  const { page = 1, limit = 3 } = req.query;

  try {
    const apiResponse = await getRealState(page, limit);
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  realStateHandler
};
