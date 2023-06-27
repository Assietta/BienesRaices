
require('dotenv').config();



const mailController = (destinatario, asunto, cuerpo) => {

    // Configurar el correo electrónico
 const mailOptions = {
 from: process.env.SMTP_USER,
 to: destinatario,
 subject: asunto,
 text: cuerpo,
};
return mailOptions;
};

module.exports = {
    mailController
};
  