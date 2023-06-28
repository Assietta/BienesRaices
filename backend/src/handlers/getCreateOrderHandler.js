const { RealState } = require("../db");
const mercadopago = require("mercadopago");
const axios = require('axios');



const createOrderHandler = async (req, res) => {
  const { id } = req.params;
  mercadopago.configure({
    access_token:
      "TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853",
  });

  try {
    const property = await RealState.findOne({   where: { id: id }});
    const price= parseFloat(property?.operations[0]?.prices[0]?.price) * 0.001
;

    const result = await mercadopago.preferences.create({
      items: [
        {
          title: id,
          quantity: 1,
          currency_id: property?.operations[0]?.prices[0]?.currency,
          unit_price: price,
        },
      ],

    });

    const preferenceId = result.response.id;
   
    // const response = await axios(`http://localhost:3001/createOrder/${id}`);
    // const preferenceIddata = response.data;
    // console.log(preferenceIddata);
    // const handleReservarClick = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:3001/createOrder/:id');
    //     const preferenceId = response.data;
    //     const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
    //     window.location.href = redirectUrl;
    //   } catch (error) {
    //     console.error(error);
    //     // Manejar el error de acuerdo a tus necesidades
    //   }
    // };
  

    
    res.send(preferenceId);
    // res.redirect(redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};

module.exports = { createOrderHandler };