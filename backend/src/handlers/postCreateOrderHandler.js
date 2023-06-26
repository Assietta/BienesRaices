// const postCreateOrderController = require('../controllers/postCreateOrderController');
var mercadopago = require('mercadopago');

const createOrderHandler = async(req, res) => {

    mercadopago.configure({
        access_token: "TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853",
    });

const result = await mercadopago.preferences.create({

    items: [
        {
          title: 'Test',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 10.5
        }
      ]

});
const preferenceId = result.response.id;
const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;

console.log(result);
res.redirect(redirectUrl);
}

module.exports = {
    createOrderHandler
};