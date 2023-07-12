const appraisalsTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respuesta a solicitud de tasación</title>
    <style>
        /* Estilos CSS */
        body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #333333;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }

        h2 {
            color: #ffffff;
        }

        p {
            color: #ffffff;
        }

        .button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
        }

        .button:hover {
            background-color: #0056b3;
            color: #ffffff;
        }

        .logo {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://i.ibb.co/pzFrvn1/logo-png-white.png" alt="Logo de la empresa" class="logo">
        <h2>Buenas %NOMBRE% %APELLIDO%,</h2>
        <p>Gracias por comunicarte con nosotros. Hemos recibido tu solicitud de tasación.</p>
        <p>Queremos informarte que estamos analizando tu consulta y nos pondremos en contacto contigo a la brevedad posible.</p>
        <p>Si tienes alguna pregunta adicional o necesitas más información, no dudes en contactarnos.</p>
        <p>Atentamente,</p>
        <p>El equipo de la empresa de bienes raíces</p>
        <p>© 2023 M - R Propiedades© Software Inmobiliario - Tokko Broker</p>
    </div>
</body>
</html>
`;

module.exports = appraisalsTemplate;
