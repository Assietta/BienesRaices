const { mailHandler } = require('./postMailHandler');
const postContactController = require('../controllers/postContactController');

const postContactHandler = async(req, res) => {
    try {
        const { name, lastName, email, phone, mobile, comment } = req.body

        const ContactPosted = await postContactController(name, lastName, email, phone, mobile, comment);
        // const asunto = 'Consulta con Henry Real State';
        // const destinatario = email;
        // const cuerpo = `Gracias por comunicarte con nosotros. Estamos analizando tu consulta y te contactaremos a la brevedad.`
        // await mailHandler(destinatario, asunto, cuerpo);
        return res.status(200).json(ContactPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postContactHandler
};