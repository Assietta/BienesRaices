const { RealState } = require("../db.js");

const putRealStateController= async(id, adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos)=>{

  try {
    // Busca el registro en la base de datos por su ID
    const property = await RealState.findByPk(id);

    if (!property) {
      throw new Error('property not found');
    }

         property.adress= adress,
         property.banios= banios,
         property.anios= anios,
         property.descripcion= descripcion,
         property.disposicion= disposicion,
         property.expensas= expensas,
         property.plantas= plantas,
         property.alquilertemporal= alquilertemporal,
         property.ubicacion= ubicacion, 
         property.operacion= operacion,
         property.orientacion= orientacion, 
         property.estacionamiento= estacionamiento, 
         property.fotos= fotos,
         property.direccionreal= direccionreal,  
         property.condiciondelinmueble= condiciondelinmueble, 
         property.superficiecubierta= superficiecubierta, 
         property.habitaciones= habitaciones, 
         property.superficiesemicubierta= superficiesemicubierta, 
         property.situacion= situacion, 
         property.dormitorios= dormitorios, 
         property.superficie= superficie, 
         property.etiquetas= etiquetas, 
         property.toilettes= toilettes, 
         property.superficietotal= 
         property.superficietotal,  
         property.tipo= tipo, 
         property.descubierto= descubierto , 
         property.videos= videos
      
         await property.save();

        return property;
} catch(error){throw new Error('Error')}
};

module.exports={
    putRealStateController
}