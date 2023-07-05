const nodemailer = require('nodemailer');
const { mailController } = require('../controllers/postMailController');


const mailHandler = async (destinatario, asunto, cuerpo) => {
    try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
            },
    });  
      // const { destinatario, asunto, cuerpo } = req.body;
      console.log(destinatario);
      const mailOptions = mailController(destinatario, asunto, cuerpo)
      console.log(mailOptions);
      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo crear el mail');
    }
  };

  module.exports = {
    mailHandler
  };