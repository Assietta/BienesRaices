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
        success: "http://localhost:3001/success",
        failure: "http://localhost:3001/failure",
        pending: "http://localhost:3001/pending",
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

    res.send(preferenceId);
    // const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
    // res.send(redirectUrl);
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

      // BUSCAR USER EN DB
      const user = await User.findByPk(data.external_reference); // Asegúrate de que el modelo User exista y esté configurado correctamente

      // BUSCAR PROPERTY EN DB
      const property = await RealState.findByPk(data.description); // Asegúrate de que el modelo RealState exista y esté configurado correctamente

      // GUARDAR REGISTRO EN ORDERS
      const newOrder = await Order.create({
        client_idDB: data.external_reference,
        usernameDB: user.username,
        property_idDB: data.description,
        address_of_property_to_reserveDB: property.address,
        date_created: data.date_created,
        chain: data.currency_id,
        transaction_amount: data.transaction_amount,
        date_approved: data.date_approved,
        payment_id: data.id,
        payer_first_nameMP: data.payer.first_name,
        payer_last_nameMP: data.payer.last_name,
        payer_emailMP: data.payer.email,
        payer_emailDB: user.email,
        payer_identificationMP: data.payer.identification,
        payer_phoneMP: data.payer.phone,
        payer_idMP: data.payer.id,
        payment_method_id: data.payment_method_id,
        payment_type_id: data.payment_type_id,
        statement_descriptor_usernameMP: data.statement_descriptor,
        status_approved_rejected: data.status,
        status_detail_accredited: data.status_detail,
        taxes_amount: data.taxes_amount,
        transaction_amount_refunded: data.transaction_amount_refunded
      });

      console.log(newOrder);


    //NOTIFICACION POR MAIL

    res.status(200).send("OK");
    }
  } catch (error) {
    return res.sendStatus(500).json({error: error.message});
  }
};



module.exports = { createOrderHandler , webhookHandler};


















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
  axios.get(`https://api.mercadopago.com/v1/payments/${payment["data.id"]}}`, {
    headers: {
        'Authorization': TOKEN_MP
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});}



