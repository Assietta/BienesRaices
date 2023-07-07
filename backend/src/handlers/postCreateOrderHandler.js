const { RealState } = require("../db");
const mercadopago = require("mercadopago");
require('dotenv').config();
const { mailHandler } = require('./postMailHandler');
const { User } = require("../db");
const { Order } = require("../db");

const {
  TOKEN_MP, HOST
} = process.env;

const createOrderHandler = async (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  // console.log(userId)

  mercadopago.configure({
    access_token:
      TOKEN_MP,
  });

  try {

    const property = await RealState.findOne({ where: { id: id } });

    // const price= parseFloat(property?.operations[0]?.prices[0]?.price) * 0.000001

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

        success: `http://localhost:3001/success`,
        failure: `http://localhost:3001/failure`,
        pending: `http://localhost:3001/pending`,
      },
      auto_return:"approved",
      external_reference: userId,
      notification_url:'https://984b-190-174-229-190.ngrok-free.app/webhook'

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
     res.send(redirectUrl);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};


const webhookHandler=async(req, res)=>{
  // const payment= req.query.payment_id;
  const payment= req.query;
  // console.log(payment);
  try {  if(payment.type==="payment"){
      const data=await mercadopago.payment.findById(payment["data.id"]);
    console.log(data);
      // BUSCAR USER EN DB
      const user = await User.findByPk(data.response.external_reference); 
      // BUSCAR PROPERTY EN DB
      const property = await RealState.findByPk(data.response.description); 
// console.log(property);

      // GUARDAR REGISTRO EN ORDERS
      const newOrder = await Order.create({
        client_idDB: String(data.response.external_reference),
        usernameDB: String(user.dataValues.username),
        property_idDB: String(data.response.description),
        address_of_property_to_reserveDB: String(property.dataValues.address),
        date_created: String(data.response.date_created),
        chain: String(data.response.currency_id),
        transaction_amount: String(data.response.transaction_amount),
        date_approved: String(data?.response.date_approved),
        payment_id: String(data?.response.id),
        payer_first_nameMP: String(data?.response.payer['first_name']),
        payer_last_nameMP: String(data?.response.payer['last_name']),
        payer_emailMP: String(data?.response.payer['email']),
        payer_emailDB: String(user?.dataValues.email),
        payer_identificationMP: String(data?.response.payer['identification']),
        payer_phoneMP: String(data?.response.payer['phone']),
        payer_idMP: String(data?.response.payer['id']),
        payment_method_id: String(data?.response.payment_method_id),
        payment_type_id: String(data?.response.payment_type_id),
        statement_descriptor_usernameMP: String(data?.response.statement_descriptor),
        status_approved_rejected: String(data?.response.status),
        status_detail_accredited: String(data?.response.status_detail),
        taxes_amount: parseFloat(data?.response.taxes_amount),
        transaction_amount_refunded: parseFloat(data?.response.transaction_amount_refunded),
      });
      console.log(newOrder);
      let asunto='';
      String(data?.response.status)==='approved'?  asunto='Su transacción ha sido exitosa': asunto='Su transacción ha sido rechazada';
      const cuerpo = `Cualquier consulta comunicate con nosotros`

    //NOTIFICACION POR MAIL
    await mailHandler(String(user?.dataValues.email), asunto, cuerpo);



    res.status(204).send("OK");
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message});


  }
};



module.exports = { createOrderHandler , webhookHandler};

















// try {
//   const response = await axios.get(`https://api.mercadopago.com/v1/payments/${payment}`, {
//       headers: {
//           'Authorization': `Bearer TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853`
//       }
//   });

//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }










const approved =async(req, res)=>{
  axios.get(`https://api.mercadopago.com/v1/payments/${payment["data.id"]}}`, {
    headers: {
        'Authorization': TOKEN_MP
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});}



