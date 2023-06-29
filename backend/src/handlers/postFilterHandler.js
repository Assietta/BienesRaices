const { postFilterController } = require('../controllers/postFilterController');

const postFilterHandler = async (req, res) => {
  const { type, maxPrice, minPrice } = req.body;
  try {
    const properties = await postFilterController(type, maxPrice, minPrice)
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler
};