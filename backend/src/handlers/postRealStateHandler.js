const { postRealState } = require('../controllers/postRealStateController.js');

const postRealStateHandler=async (req, res)=>{
    try {
        const { adress, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, operations, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos } = req.body;
        const findInmueble = await postRealState( adress, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, operations, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos)
          return res.status(200).json(findInmueble); 
        } catch (error) {
        return res.status(500).json({error: error.message})
      }
}

module.exports={

    postRealStateHandler
}