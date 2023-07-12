const { mailHandler } = require('./postMailHandler');
const postContactController = require('../controllers/postContactController');
const contactTemplate = require('../mailsTemplate/postContact');

const postContactHandler = async(req, res) => {
    try {
        const { name, lastName, email, phone, mobile, comment, userId } =
          req.body;

        const ContactPosted = await postContactController(name, lastName, email, phone, mobile, comment, userId);
        const asunto = 'Consulta con Henry Real State';
        const destinatario = email;
        const cuerpo = contactTemplate.replace('%NOMBRE%', name);
        await mailHandler(destinatario, asunto, cuerpo);
        return res.status(200).json(ContactPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postContactHandler
};