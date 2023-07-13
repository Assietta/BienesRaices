const { log } = require("console");
const {
  putTestimonialsController,
} = require("../controllers/putTestimonialsController.js");

const putTestimonialsHandler = async (req, res) => {
  const id = req.params.id;
  const { disabled } = req.body;
  try {
    await putTestimonialsController(id, disabled);
    res.send("Testimonio habilitado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { putTestimonialsHandler };
