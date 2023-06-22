const { RealState } = require("../db.js");

const postRealState= async( adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos)=>{
    const findInmueble = await RealState.findOne({
        where: { adress: adress.toLowerCase() }//ver esto de lowerCase
      });//Solo se fija si existe entre los creados
      if (findInmueble) {
        return "Property already publicated"
      } else {
        let newPublication = await RealState.create({
         adress: adress,
         banios: banios,
         anios: anios,
         descripcion: descripcion,
         disposicion: disposicion,
         expensas: expensas,
         plantas: plantas,
         alquilertemporal: alquilertemporal,
         ubicacion: ubicacion, 
         operacion: operacion,
         orientacion: orientacion, 
         estacionamiento: estacionamiento, 
         fotos: fotos,
         direccionreal: direccionreal,  
         condiciondelinmueble: condiciondelinmueble, 
         superficiecubierta: superficiecubierta, 
         habitaciones: habitaciones, 
         superficiesemicubierta: superficiesemicubierta, 
         situacion: situacion, 
         dormitorios: dormitorios, 
         superficie: superficie, 
         etiquetas: etiquetas, 
         toilettes: toilettes, 
         superficietotal: 
         superficietotal,  
         tipo: tipo, 
         descubierto: descubierto , 
         videos: videos
        });
        return newPublication
}
}

module.exports={
    postRealState
}