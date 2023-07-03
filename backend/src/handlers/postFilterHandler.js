const { postFilterController } = require('../controllers/postFilterController');

const postFilterHandler = async (req, res) => {
  const { type, operation_type, maxPrice, minPrice, orientation,  currency, tags, parking_lot_amount, bathroom_amount, suite_amount, room_amount} = req.body;
  try {
    const properties = await postFilterController(type, operation_type, maxPrice, minPrice, orientation,  currency, tags, parking_lot_amount, bathroom_amount, suite_amount, room_amount)
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler
};
