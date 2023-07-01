const { User } = require("../db")
const bcrypt = require('bcryptjs');

const postUserController = async(email, password, username, rol) => {
    const saltRounds = 10;
    if(password) password = await bcrypt.hash(password, saltRounds);
    const user = await User.create({email, password, username, rol}, {timestamps: false})

    return user
}


module.exports = postUserController