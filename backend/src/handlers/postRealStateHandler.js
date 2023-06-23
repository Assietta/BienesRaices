const { postRealState } = require('../controllers/postRealStateController.js');

const postRealStateHandler=async (req, res)=>{
    try {
        const { adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos} = req.body;
        const findInmueble = await postRealState( adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos)
          return res.status(200).json(findInmueble); 
        } catch (error) {
        return res.status(500).json({error: error.message})
      }
}

module.exports={

    postRealStateHandler
}