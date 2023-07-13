const { User } = require("../db.js");

const getUsersController = async(req) => {
    try {
      let users;
      if (req.query.id) {
        users = await User.findOne({ where: { id: req.query.id } });
      } else if (req.query.username) {
        users = await User.findOne({ where: { username: req.query.username } });
      } else if (req.query.email) {
        users = await User.findOne({ where: { email: req.query.email } });
      } else {
        users = await User.findAll();
      }
      return users;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar los usuarios')
    }
  };

module.exports = {
    getUsersController
};
