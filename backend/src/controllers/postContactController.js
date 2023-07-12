const { Contact } = require("../db")

const postContactController = async (
  name,
  lastName,
  email,
  phone,
  mobile,
  comment,
  userId
) => {
  const contact = await Contact.create({
    name,
    lastName,
    email,
    phone,
    mobile,
    comment,
    userId,
  });

  return contact;
};


module.exports = postContactController