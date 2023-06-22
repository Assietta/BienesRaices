// const { postRealState } = require('../controllers/contpostrealState.js');
const { RealState } = require("../db.js");

const postRealStateHandler=async (req, res)=>{
    try {
        const { adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos} =
          req.body;
        const findInmueble = await RealState.findOne({
          where: { adress: adress.toLowerCase() },//ver esto de lowerCase
        });//Solo se fija si existe entre los creados
        if (findInmueble) {
          res.status(400).send("Property already publicated");
        } else {
          let newPubication = await RealState.create({
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
           superficiesemicubierta: superficiesemicubierta , situacion: situacion, dormitorios: dormitorios, superficie: superficie, etiquetas: etiquetas, toilettes: toilettes, superficietotal: superficietotal,  tipo: tipo, descubierto: descubierto , videos: videos
          });
          res.status(200).send("publicated!");
          //.json(newPubication); // esto no hace falta por eso lo comento 
    
        }
      } catch (error) {
        console.log(error);
      }
}

module.exports={

    postRealStateHandler
}