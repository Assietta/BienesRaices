const { RealState } = require("../db.js");
const cloudinary = require ("cloudinary").v2

cloudinary.config({ 
  cloud_name: 'da2gg1fcp', 
  api_key: '654147179431961', 
  api_secret: 'KvK1E46wxQoyz__UIXpm_x83Y9Y' 
});

const postRealState= async( address, bathroom_amount, age, description, disposition, expenses, floors_amount, has_temporary_rent, location, price, period, currency, operation_type, orientation, parking_lot_amount, photos, real_address,  property_condition, roofed_surface, room_amount, semiroofed_surface , situation, suite_amount, surface, tags, toilet_amount, total_surface,  type, unroofed_surface , videos, geo_lat, geo_long)=>{
    const findInmueble = await RealState.findOne({
        where: { address: address.toLowerCase() }
      });
      if (findInmueble) {
        return "Property already publicated"
      } else {
        let arrayImages = []

        const filepromises = []

for(let element of photos)
{    const promisefileimg = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
            folder: "ImageProp",
            resource_type: "image"
        }, (error, result) => {
            if (error) {

                reject(error)
            }
            else {

                arrayImages.push(result.secure_url)
                resolve(result)
            }
        }).end(element.buffer)
    })
    filepromises.push(promisefileimg)
    }
     await Promise.all(filepromises)
       




videos=["no hay videos"]
        let newPublication = await RealState.create({
         address: address,
         bathroom_amount: bathroom_amount,
         age: age,
         description: description,
         disposition: disposition,
         expenses: expenses,
         floors_amount: floors_amount,
         has_temporary_rent: has_temporary_rent,
         location: location, 
         price: price,
         operation_type: operation_type,
         currency: currency,
         period: period,
         orientation: orientation, 
         parking_lot_amount: parking_lot_amount, 
         photos: arrayImages,
         real_address: real_address,  
         property_condition: property_condition, 
         roofed_surface: roofed_surface, 
         room_amount: room_amount, 
         semiroofed_surface: semiroofed_surface, 
         situation: situation, 
         suite_amount: suite_amount, 
         surface: surface, 
         tags: tags, 
         toilet_amount: toilet_amount, 
         total_surface: total_surface,  
         type: type, 
         unroofed_surface: unroofed_surface, 
         videos: videos,
         geo_lat: geo_lat,
         geo_long: geo_long
        });
        return newPublication
}
}

module.exports={
    postRealState
}