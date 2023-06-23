const { putRealStateController } = require('../controllers/putRealStateController.js');

const putRealStateHandler=async(req, res) => {
    const id = req.params.id;
    const {adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos}=req.body;
   try {
    const updatedRealState = await putRealStateController(id, adress, banios, anios, descripcion, disposicion, expensas, plantas, alquilertemporal, ubicacion, operacion,orientacion, estacionamiento, fotos, direccionreal,  condiciondelinmueble, superficiecubierta, habitaciones, superficiesemicubierta , situacion, dormitorios, superficie, etiquetas, toilettes, superficietotal,  tipo, descubierto , videos);
    res.send(updatedRealState);
   } catch (error) {
    
   }
    res.send('Registro modificado correctamente');
  }

  module.exports={

    putRealStateHandler
  }