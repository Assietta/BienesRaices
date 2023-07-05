const { RealState } = require("../db");
const mercadopago = require("mercadopago");
const axios=require('axios');

const createOrderHandler = async (req, res) => {
  const userId = req.body.userId;
 
  const { id } = req.params;
  mercadopago.configure({
    access_token:
      "TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853",
  });

  try {
    const property = await RealState.findOne({   where: { id: id }});
    const price= parseFloat(property?.operations[0]?.prices[0]?.price) * 0.000001
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
      back_urls: {
        success: "http://localhost:3001/success",
        failure: "http://localhost:3001/failure",
        pending: "http://localhost:3001/pending",
      },
      auto_return:"approved",
      external_reference: userId,
      // notification_url: "https://d280-2802-8010-960b-6700-5565-878c-cb53-8ee7.sa.ngrok.io/webhook",
      // redirect_urls: { failure: 'https://d280-2802-8010-960b-6700-5565-878c-cb53-8ee7.sa.ngrok.io/failure', pending: 'https://d280-2802-8010-960b-6700-5565-878c-cb53-8ee7.sa.ngrok.io/pending', success: 'https://d280-2802-8010-960b-6700-5565-878c-cb53-8ee7.sa.ngrok.io/success' },

    });
console.log(result);
    const preferenceId = result.response.id;
   

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
  

    
    // res.send(preferenceId);
     const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
    res.send(redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};


const webhookHandler=async(req, res)=>{
// const payment= req.query.payment_id;
const payment= req.query;
try {

  if(payment.type==="payment"){
    const data=await mercadopago.payment.findById(payment["data.id"]);
  console.log(data);
  //GUARDAR EN DB
  //NOTIFICACION POR MAIL
  res.status(200).send("OK");};
  
} catch (error) {
  return res.sendStatus(500).json({error: error.message});
}
}
// try {
//   //   const data= await  axios.get(`https://api.mercadopago.com/v1/payments/${payment}`, {
//   //     headers: {
//   //         'Authorization': `Bearer TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853`
//   //     }
//   // }).then(response => {
//   //     console.log(response.data);
//   // }).catch(error => {
//   //     console.error(error);
//   // });
//   console.log(payment);
  

// } catch (error) {
//   console.log(error);

// }


const approved =async(req, res)=>{
  axios.get(`https://api.mercadopago.com/v1/payments/${paymentdId}`, {
    headers: {
        'Authorization': `Bearer TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853`
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});}

module.exports = { createOrderHandler, webhookHandler, approved };




//https://www.mercadopago.com.ar/checkout/v1/payment/redirect/56e90584-6825-4efa-ab7e-a01134092b03/congrats/approved/?preference-id=1406402853-17362b35-64cd-4a8c-9748-15e8ab343b04&router-request-id=08df5eaa-a0d0-48b2-a37e-5d6c7c5ffb1d&p=62946bae96cc0521f3b60b072cfb85ed