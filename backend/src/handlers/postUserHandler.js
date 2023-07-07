const { mailHandler } = require('./postMailHandler');
const postUserController = require('../controllers/postUserController');
const emailTemplate = require('../mailsTemplate/postUserMail');

const postUserHandler = async(req, res) => {
    try {
        const { email, password, username, rol, image, provider } = req.body
        const userPosted = await postUserController(email, password, username, rol, image, provider) ;
        const asunto = 'Bienvenido a Henry Real State';
        const destinatario = email;
        const cuerpo = emailTemplate.replace('%NOMBRE%', username);
        await mailHandler(destinatario, asunto, cuerpo);
        return res.status(200).json(userPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postUserHandler
};