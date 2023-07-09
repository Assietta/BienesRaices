const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a la aplicación</title>
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
        <img src="https://i.ibb.co/pzFrvn1/logo-png-white.png" alt="Logo de la aplicación" class="logo">
        <h2>Hola %NOMBRE%, Bienvenido a nuestra aplicación.</h2>
        <p>Gracias por registrarte. ¡Estamos emocionados de tenerte como parte de nuestra comunidad!</p>
        <p>Para comenzar a utilizar la aplicación, simplemente inicia sesión con tu cuenta recién creada.</p>
        <p>Haz clic en el botón de abajo para acceder a tu cuenta:</p>
        <a class="button" href="https://www.example.com/login">Iniciar sesión</a>
        <p>Muchas Gracias</p>
        <p>© 2023 M - R Propiedades© Software Inmobiliario - Tokko Broker</p>
    </div>
</body>
</html>
`;

module.exports = emailTemplate;
