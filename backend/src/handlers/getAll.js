const { getRealState } = require('../controllers/getAllController.js');


const realStateHandler = async (req, res) => {
  try {
    const allRealEstate = await getRealState()

    return res.status(200).json(allRealEstate)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  realStateHandler
};
