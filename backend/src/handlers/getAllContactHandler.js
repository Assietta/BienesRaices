const getAllContactController = require("../controllers/getAllContactsController");

const getAllContactHandler = async (req, res) => {
    try {
        const contacts = await getAllContactController()

    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ contacts });
  }
};

module.exports = {
  getAllContactHandler,
};
