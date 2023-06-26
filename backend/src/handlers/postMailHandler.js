const nodemailer = require('nodemailer');
const { mailController } = require('../controllers/postMailController')

const mailHandler = async (req, res) => {
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
      const { destinatario, asunto, cuerpo } = req.body;

      const mailOptions = mailController(destinatario, asunto, cuerpo)
      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    mailHandler
  };