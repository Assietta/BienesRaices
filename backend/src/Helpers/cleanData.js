const { v4: uuidv4 } = require("uuid");

const cleanData = (data) => {
  const objects = data.objects;
  const cleanedData = [];

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];

    const address = object.fake_address || "";
    const bathroom_amount = object.bathroom_amount || 0;
    const age = object.age || 0;
    const description = object.description || "";
    const disposition = object.disposition || "";
    const expenses = object.expenses || 0;
    const floors_amount = object.floors_amount || 0;
    const has_temporary_rent = object.has_temporary_rent;
    const location = object.location.short_location.split(" | ")[0] || "";
    const operations = object.operations || {};
    const orientation = object.orientation || "";
    const parking_lot_amount = object.parking_lot_amount || 0;
    const photos = object.photos?.map((photo) => photo.image) || [""];
    const real_address = object.real_address || "";
    const property_condition = object.property_condition || "";
    const roofed_surface = object.roofed_surface || "";
    const room_amount = object.room_amount || 0;
    const semiroofed_surface = object.semiroofed_surface || "";
    const situation = object.situation || "";
    const suite_amount = object.suite_amount || 0;
    const surface = object.surface || "";
    const tags = object.tags || [{}];
    const toilet_amount = object.toilet_amount || 0;
    const total_surface = object.total_surface || "";
    const type = object.type?.name || "";
    const unroofed_surface = object.unroofed_surface || "";
    const videos = object.videos?.map((video) => video.url) || [""];
    const geo_lat = object.geo_lat || "";
    const geo_long = object.geo_long || "";

    const cleanedOperations =
      object.operations?.map((operation) => {
        const price = operation.prices?.[0]?.price || 0;
        const currency = operation.prices?.[0]?.currency || "";
        const operation_type = operation.operation_type || "";
        const period = operation.prices?.[0]?.period.toString() || "";

        return {
          price,
          currency,
          operation_type,
          period,
        };
      }) || [];

    const cleanedTags = tags.map((tag) => {
      return {
        id: uuidv4(), // Genera un UUID único para cada tag
        name: tag.name,
        type: tag.type,
      };
    });

    const cleanedObject = {
      address,
      real_address,
      situation,
      age,
      property_condition,
      disposition,
      orientation,
      location,
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
      tags: cleanedTags,
      geo_lat,
      geo_long,
      ...cleanedOperations[0],
    };

    cleanedData.push(cleanedObject);
  }

  return cleanedData;
};

module.exports = {
  cleanData,
};
