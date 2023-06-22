const { User } = require("../db")

const postUserController = async(email, password, username, rol) => {
    const user = await User.create({email, password, username, rol}, {timestamps: false})

    return user
}


module.exports = postUserController