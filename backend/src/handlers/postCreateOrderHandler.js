const { RealState } = require("../db");
const mercadopago = require("mercadopago");
require('dotenv').config();
const {
  TOKEN_MP
} = process.env;

const createOrderHandler = async (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;

  mercadopago.configure({
    access_token:
      TOKEN_MP,
  });

  try {

    const property = await RealState.findOne({ where: { id: id } });
    const price = parseFloat(property?.price) * 0.001;
    
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: id,
          quantity: 1,
          currency_id: property?.currency,
          unit_price: price,
        },
      ],
      
      back_urls: {
        success: "https://bienesraices-production-9eb3.up.railway.app/success",
        failure: "https://bienesraices-production-9eb3.up.railway.app/failure",
        pending: "https://bienesraices-production-9eb3.up.railway.app/pending",
      },
      auto_return:"approved",
      external_reference: userId,
      notification_url:'https://bienesraices-production-9eb3.up.railway.app/webhook'
    });

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
    res.redirect(redirectUrl);
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
    //BUSCAR USER EN DB Y GUARDAR REGISTRO EN ORDERS
    //NOTIFICACION POR MAIL
    res.status(200).send("OK");
    }
  } catch (error) {
    return res.sendStatus(500).json({error: error.message});
  }
};
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


module.exports = { createOrderHandler , webhookHandler};
