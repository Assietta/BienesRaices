const { putRealStateController } = require('../controllers/putRealStateController.js');

const putRealStateHandler=async(req, res) => {
    const id = req.params.id;
    const {address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, operations, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos}=req.body;
   try {
    const updatedRealState = await putRealStateController(id, address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, operations, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos);
    res.send(updatedRealState);
   } catch (error) {
    
   }
    res.send('Registro modificado correctamente');
  }

  module.exports={

    putRealStateHandler
  }