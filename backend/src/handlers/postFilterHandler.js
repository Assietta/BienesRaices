const { postFilterController } = require('../controllers/postFilterController');

const postFilterHandler = async (req, res) => {
  const { type, maxPrice, minPrice, orientation } = req.body;
  try {
    const properties = await postFilterController(type, maxPrice, minPrice, orientation)
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler
};
