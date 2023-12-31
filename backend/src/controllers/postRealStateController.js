const { RealState } = require("../db.js");

const postRealState= async( address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, price, period, currency, operation_type, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos, geo_lat, geo_long)=>{
    const findInmueble = await RealState.findOne({
        where: { address: address.toLowerCase() }
      });
      if (findInmueble) {
        return "Property already publicated"
      } else {
        let newPublication = await RealState.create({
         address: address,
         bathroom_amount: bathroom_amount,
         age: age,
         description: description,
         disposition: disposition,
         expenses: expenses,
         floors_amount: floors_amount,
         has_temporary_rent: has_temporary_rent,
         location: location, 
         price: price,
         operation_type: operation_type,
         currency: currency,
         period: period,
         orientation: orientation, 
         parking_lot_amount: parking_lot_amount, 
         photos: photos,
         real_address: real_address,  
         property_condition: property_condition, 
         roofed_surface: roofed_surface, 
         room_amount: room_amount, 
         semiroofed_surface: semiroofed_surface, 
         situation: situation, 
         suite_amount: suite_amount, 
         surface: surface, 
         tags: tags, 
         toilet_amount: toilet_amount, 
         total_surface: total_surface,  
         type: type, 
         unroofed_surface: unroofed_surface, 
         videos: videos,
         geo_lat: geo_lat,
         geo_long: geo_long
        });
        return newPublication
}
}

module.exports={
    postRealState
}