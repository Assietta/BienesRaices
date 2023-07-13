const { postRealState } = require('../controllers/postRealStateController.js');

const postRealStateHandler=async (req, res)=>{
  console.log(req.body,"soy el req body del back");
    try {
      const {photos} = req.files
        const { address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, price, period, currency, operation_type, orientation, parking_lot_amount, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos, geo_lat, geo_long } = req.body;
        const findInmueble = await postRealState( address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, price, period, currency, operation_type, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos, geo_lat, geo_long)
          return res.status(200).json(findInmueble); 
        } catch (error) {
        return res.status(500).json({error: error.message})
      }
}

module.exports={

    postRealStateHandler
}