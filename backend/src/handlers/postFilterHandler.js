const { postFilterController } = require('../controllers/postFilterController');

const postFilterHandler = async (req, res) => {
  const { type, operation_type, maxPrice, minPrice, orientation,  currency, bathroom_amount, parking_lot_amount, room_amount, suite_amount, tags} = req.body;
  try {
    const properties = await postFilterController(type, operation_type, maxPrice, minPrice, orientation,  currency, bathroom_amount,parking_lot_amount, room_amount, suite_amount, tags)
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler
};
