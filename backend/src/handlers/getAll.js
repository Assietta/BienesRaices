const { getRealState } = require('../controllers/contrealState.js');

const realStateHandler = async (req, res) => {
  try {
    const apiResponse = await getRealState();
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  realStateHandler
};
