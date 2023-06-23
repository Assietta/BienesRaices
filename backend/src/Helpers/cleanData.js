

const cleanData = (data) => {
  const objects = data.objects;
  const cleanedData = [];

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];

    const id = object.id || 0;
    const address = object.fake_address || '';
    const bathroom_amount = object.bathroom_amount || 0;
    const age = object.age || 0;
    const description = object.description || '';
    const disposition = object.disposition || '';
    const expenses = object.expenses || 0;
    const floors_amount = object.floors_amount || 0;
    const has_temporary_rent = object.has_temporary_rent;
    const location = object.short_location || '';
    const operations = object.operations || {};
    const orientation = object.orientation || '';
    const parking_lot_amount = object.parking_lot_amount || 0;
    const photos = object.photos || [{}];
    const real_address = object.real_address || '';
    const property_condition = object.property_condition || '';
    const roofed_surface = object.roofed_surface || '';
    const room_amount = object.room_amount || 0;
    const semiroofed_surface = object.semiroofed_surface || '';
    const situation = object.situation || '';
    const suite_amount = object.suite_amount || 0;
    const surface = object.surface || '';
    const tags = object.tags || [{}];
    const toilet_amount = object.toilet_amount || 0;
    const total_surface = object.total_surface || '';
    const type = object.type || {};
    const unroofed_surface = object.unroofed_surface || '';
    const videos = object.videos || [{}];
    
    const cleanedObject = {
      id,
      address,
      real_address,
      situation,
      age,
      property_condition,
      disposition,
      orientation,
      location,
      operations,
      type,
      expenses,
      room_amount,
      floors_amount,
      bathroom_amount,
      toilet_amount,
      suite_amount,
      parking_lot_amount,
      surface,
      roofed_surface,
      semiroofed_surface,
      total_surface,
      unroofed_surface,
      has_temporary_rent,
      description,
      videos,
      photos,
      tags,
    };
    
    cleanedData.push(cleanedObject);
  }
  
  return cleanedData;
};

module.exports = {
  cleanData
};
