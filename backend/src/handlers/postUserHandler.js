const { mailHandler } = require('./postMailHandler');
const postUserController = require('../controllers/postUserController');

const postUserHandler = async(req, res) => {
    try {
        const { email, password, username, rol } = req.body
        const userPosted = await postUserController(email, password, username, rol) ;
        const asunto = 'Bienvenido a Henry Real State';
        const destinatario = email;
        const cuerpo = 'Gracias por registrarte en nuestro sitio.'
        await mailHandler(destinatario, asunto, cuerpo);
        return res.status(200).json(userPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postUserHandler
};