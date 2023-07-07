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
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #333333;
            }
    
            p {
                color: #666666;
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
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hola %NOMBRE%! Bienvenido a nuestra aplicación</h1>
            <p>Gracias por registrarte. ¡Estamos emocionados de tenerte como parte de nuestra comunidad!</p>
            <p>Para comenzar a utilizar la aplicación, simplemente inicia sesión con tu cuenta recién creada.</p>
            <p>Haz clic en el botón de abajo para acceder a tu cuenta:</p>
            <a class="button" href="https://www.example.com/login">Iniciar sesión</a>
        </div>
    </body>
    </html>
`;

module.exports = emailTemplate;
