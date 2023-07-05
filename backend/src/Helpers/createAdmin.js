const postUserController = require('../controllers/postUserController')

const createAdmin = () => {
    const username = process.env.USERNAME_ADMIN
    const email = process.env.EMAIL_ADMIN
    const password = process.env.PASSWORD_ADMIN
    const rol = 'admin'
    console.log(email, password, username, rol);

    const user = postUserController(email, password, username, rol)
    console.log(user);
}

module.exports = createAdmin