const { RealState } = require("../db.js");

const putRealStateController= async(id, address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, price, period, currency, operation_type, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos)=>{

  try {
    // Busca el registro en la base de datos por su ID
    const property = await RealState.findByPk(id);

    if (!property) {
      throw new Error('property not found');
    }



    property.address= address,
    property.bathroom_amount= bathroom_amount,
    property.age= age,
    property.description= description,
    property.disposition= disposition,
    property.expenses= expenses,
    property.floors_amount= floors_amount,
    property.has_temporary_rent= has_temporary_rent,
    property.location= location, 
    property.price= price,
    property.period= period,
    property.currency= currency,
    property.operation_type= operation_type,
    property.orientation= orientation, 
    property.parking_lot_amount= parking_lot_amount, 
    property.photos= photos,
    property.real_address= real_address,  
    property.property_condition= property_condition, 
    property.roofed_surface= roofed_surface, 
    property.room_amount= room_amount, 
    property.semiroofed_surface= semiroofed_surface, 
    property.situation= situation, 
    property.suite_amount= suite_amount, 
    property.surface= surface, 
    property.tags= tags, 
    property.toilet_amount= toilet_amount, 
    property.total_surface= total_surface,  
    property.type= type, 
    property.unroofed_surface= unroofed_surface, 
    property.videos= videos
       
      
         await property.save();

        return property;
} catch(error){throw new Error('Error')}
};

module.exports={
    putRealStateController
}