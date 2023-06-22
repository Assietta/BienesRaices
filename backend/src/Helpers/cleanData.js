

const cleanData = (data) => {
  const objects = data.objects;
  const cleanedData = [];

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];

    const id = object.id || '';
    const address = object.fake_address || '';
    const baños = object.bathroom_amount || '';
    const años = object.age || '';
    const descripcion = object.description || '';
    const disposicion = object.disposition || '';
    const expensas = object.expenses || '';
    const plantas = object.floors_amount || '';
    const alquilertemporal = object.has_temporary_rent || '';
    const ubicacion = object.short_location || '';
    const operacion = object.operations || '';
    const orientacion = object.orientation || '';
    const estacionamiento = object.parking_lot_amount || '';
    const fotos = object.photos || '';
    const direccionreal = object.real_address || '';
    const condiciondelinmueble = object.property_condition || '';
    const superficiecubierta = object.roofed_surface || '';
    const habitaciones = object.room_amount || '';
    const superficiesemicubierta = object.semiroofed_surface || '';
    const situacion = object.situation || '';
    const dormitorios = object.suite_amount || '';
    const superficie = object.surface || '';
    const etiquetas = object.tags || '';
    const Toilettes = object.toilet_amount || '';
    const superficietotal = object.total_surface || '';
    const tipo = object.type || '';
    const descubierto = object.unroofed_surface || '';
    const videos = object.videos || '';
    
    const cleanedObject = {
      id,
      address,
      direccionreal,
      situacion,
      años,
      condiciondelinmueble,
      disposicion,
      orientacion,
      ubicacion,
      operacion,
      tipo,
      expensas,
      habitaciones,
      plantas,
      baños,
      Toilettes,
      dormitorios,
      estacionamiento,
      superficie,
      superficiecubierta,
      superficiesemicubierta,
      superficietotal,
      descubierto,
      alquilertemporal,
      descripcion,
      videos,
      fotos,
      etiquetas,
    };
    
    cleanedData.push(cleanedObject);
  }
  
  return cleanedData;
};

module.exports = {
  cleanData
};
