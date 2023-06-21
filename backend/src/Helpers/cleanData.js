

const cleanData = (data) => {
  const id = data.id || '';
  const address = data.fake_address || '';
  const baños = data.bathroom_amount || '';
  const años = data.age || '';
  const descripcion = data.description || '';
  const disposicion = data.disposition || '';
  const expensas = data.expenses || '';
  const plantas = data.floors_amount || '';
  const alquilertemporal= data.has_temporary_rent || '';
  const ubicacion = data.short_location || '';
  const operacion = data.operations || '';
  const orientacion = data.orientation || '';
  const estacionamiento = data.arking_lot_amount || '';
  const fotos = data.photos || '';
  const direccionreal= data.real_address || '';
  const condiciondelinmueble= data.roperty_condition || '';
  const superficiecubierta= data.roofed_surface || '';
  const habitaciones = data.room_amount || '';
  const superficiesemicubierta = data.semiroofed_surface || '';
  const situacion = data.situation || '';
  const dormitorios = data.suite_amount || '';
  const superficie = data.surface || '';
  const etiquetas = data.tags || '';
  const Toilettes = data.toilet_amount || '';
  const superficietotal = data.total_surface || '';
  const tipo = data.type || '';
  const descubierto = data.unroofed_surface || '';
  const videos = data.videos || '';


  return {
    id,
    address,
    baños,
    años,
    descripcion,
    disposicion,
    expensas,
    plantas,
    alquilertemporal,
    ubicacion,
    operacion,
    orientacion,
    estacionamiento,
    fotos,
    direccionreal,
    condiciondelinmueble,
    superficiecubierta,
    habitaciones,
    superficiesemicubierta,
    situacion,
    dormitorios,
    superficie,
    etiquetas,
    Toilettes,
    superficietotal,
    tipo,
    descubierto,
    videos,
  };
};

module.exports = {
  cleanData
};
