'use client'

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function RealStateForm() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
      const fetchTags = async () => {
        try {
          const { data } = await axios.get('http://localhost:3001/tags');
          setTags(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchTags();
    }, []);



  const [formData, setFormData] = useState({
    address: '',
    bathroom_amount: '',
    age: '',
    description: '',
    disposition: '',
    expenses: '',
    floors_amount: '',
    has_temporary_rent: '',
    location: '',
    price: '',
    period: '',
    currency: '',
    operation_type: '',
    orientation: '',
    parking_lot_amount: '',
    photos: [],
    real_address: '',
    property_condition: '',
    roofed_surface: '',
    room_amount: '',
    semiroofed_surface: '',
    situation: '',
    suite_amount: '',
    surface: '',
    tags: [],
    toilet_amount: '',
    total_surface: '',
    type: '',
    unroofed_surface: '',
    videos: [],
    isVisible: true,
    isReserved: false,
    geo_long: '',
    geo_lat: '',
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
     
  };

  const [photos, setPhotos] = useState([])

  // const handleEnterPress = (event) => {
  //   if (event.key === 'Enter') {
  //       if(photos.includes(event.target.files)) {
  //           event.target.files = '';
  //           return
  //       }
  //       else {
  //          event.preventDefault();
  //           setPhotos([...photos, event.target.files]);
  //           event.target.files = ''; 
  //       }
      
  //   }
  // };

  const handleEnterPress = (event) =>{
   
    if(event.target.files[0]){ setFormData((prevData)=>({
      ...prevData, photos:[...prevData.photos, event.target.files[0]] 
    }))}
  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFormData({...formData, tags: selectedTags})
    // setFormData({...formData, photos: photos})
    const formSub = new FormData()
    for(let props in formData ){

      if(props === "photos" ){
  

        for(let element of formData["photos"]){

          formSub.append("photos", element)
        }
        
      }
      else if (props === "tags"){
        for(let element of formData["tags"]){
          formSub.append("tags", element)
      }
    }
      else {formSub.append(props, formData[props])}
    }
    try {

      const response = await axios.post('http://localhost:3001/realState', formSub);

      // Aquí puedes realizar alguna acción adicional después de crear el RealState
    } catch (error) {
      console.error('Error creating RealState:', error);
      // Manejo de errores
    }

    // Restablecer el formulario
    setFormData({
      address: '',
      bathroom_amount: '',
      age: '',
      description: '',
      disposition: '',
      expenses: '',
      floors_amount: '',
      has_temporary_rent: '',
      location: '',
      price: '',
      period: '0',
      currency: '',
      operation_type: '',
      orientation: '',
      parking_lot_amount: '',
      photos: [],
      real_address: '',
      property_condition: '',
      roofed_surface: '',
      room_amount: '',
      semiroofed_surface: '',
      situation: '',
      suite_amount: '',
      surface: '',
      tags: [],
      toilet_amount: '',
      total_surface: '',
      type: '',
      unroofed_surface: '',
      videos: [],
      isVisible: true,
      isReserved: false,
      geo_long: '',
      geo_lat: '',
    });
  };

  const handleTagsChange = (event) => {
    if(!formData.tags.includes(event.target.value)) setFormData({...formData, tags: [...formData.tags, event.target.value]});
    else return
  };

  const handleRemoveTag = (tag) => {
    setFormData((prevData) =>({...prevData, tags:prevData.tags.filter((t) => t !== tag)})) ;
  };

  const handleRemovePhoto = (photo) => {
    const send = formData.photos.filter((p) => p.name !== photo.name)
    setFormData((prevData) =>({...prevData, photos:send})) ;
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover">
      <div className="mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="max-w-xl mr-12 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <h1 className="font-bold text-2xl">Nuevo inmueble</h1>
                </div>

                <div className="mt-2 text-base leading-7 text-gray-600">
                  {/* input Dirección */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Dirección <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Ingresa la dirección"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Cantidad de baños */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Cantidad de baños <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="bathroom_amount"
                      value={formData.bathroom_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de baños"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Edad */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Antiguedad <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Ingresa la antiguedad"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Descripción */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Descripción</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Ingresa una descripción"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-20 px-4 resize-none"
                    />
                  </div>

                  {/* input Disposición */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Disposición</label>
                    <input
                      type="text"
                      name="disposition"
                      value={formData.disposition}
                      onChange={handleInputChange}
                      placeholder="Ingresa la disposición"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Gastos */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Gastos</label>
                    <input
                      type="number"
                      name="expenses"
                      value={formData.expenses}
                      onChange={handleInputChange}
                      placeholder="Ingresa los gastos"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Cantidad de pisos */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Cantidad de pisos <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="floors_amount"
                      value={formData.floors_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de pisos"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Tiene alquiler temporal */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Tiene alquiler temporal <abbr title="required">*</abbr>
                    </label>
                    <select
                      name="has_temporary_rent"
                      value={formData.has_temporary_rent}
                      onChange={handleInputChange}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </div>

                  {/* input Ubicación */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Ubicación <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ingresa la ubicación"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Precio */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Precio <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Ingresa el precio"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Moneda */}
                    <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">Moneda</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="ARS">ARS</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>

                  {/* input Tipo de operación */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Tipo de operación <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="operation_type"
                      value={formData.operation_type}
                      onChange={handleInputChange}
                      placeholder="Ingresa el tipo de operación"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Orientación */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Orientación</label>
                    <input
                      type="text"
                      name="orientation"
                      value={formData.orientation}
                      onChange={handleInputChange}
                      placeholder="Ingresa la orientación"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Cantidad de estacionamientos */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Cantidad de estacionamientos <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="parking_lot_amount"
                      value={formData.parking_lot_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de estacionamientos"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Fotos */}
                    <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">Fotos {'(Presione enter para subir foto)'}</label>
                        <input
                            type="file"
                            name="photos"
                            accept='.png, .jpg'
                            onChange={handleEnterPress}
                            placeholder="Ingresa las fotos en formato .jpg y/o .png"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        />
                    </div>
                    <div className="mb-3 space-y-2 w-full max-w-[80%] text-xs">
                        <p className="font-semibold text-gray-600 py-2">Fotos subidas:</p>
                        <div className="flex flex-wrap overflow-auto max-w-[80%]">
                            {formData.photos?.map((photo, i) => (
                            <div key={photo.name} className="inline-block bg-black text-white px-2 py-1 rounded-lg mr-2 mb-2">
                                {photo.name} <button onClick={() => handleRemovePhoto(photo)} className="ml-2 text-white">&times;</button>
                            </div>
                            ))}
                        </div>
                    </div>

                  {/* input Dirección real */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Dirección real <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="real_address"
                      value={formData.real_address}
                      onChange={handleInputChange}
                      placeholder="Ingresa la dirección real"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Condición de la propiedad */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Condición de la propiedad</label>
                    <input
                      type="text"
                      name="property_condition"
                      value={formData.property_condition}
                      onChange={handleInputChange}
                      placeholder="Ingresa la condición de la propiedad"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Superficie techada */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Superficie techada</label>
                    <input
                      type="text"
                      name="roofed_surface"
                      value={formData.roofed_surface}
                      onChange={handleInputChange}
                      placeholder="Ingresa la superficie techada"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Cantidad de habitaciones */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Cantidad de habitaciones <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="room_amount"
                      value={formData.room_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de habitaciones"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Superficie semitechada */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Superficie semitechada</label>
                    <input
                      type="text"
                      name="semiroofed_surface"
                      value={formData.semiroofed_surface}
                      onChange={handleInputChange}
                      placeholder="Ingresa la superficie semitechada"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Situación */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Situación</label>
                    <input
                      type="text"
                      name="situation"
                      value={formData.situation}
                      onChange={handleInputChange}
                      placeholder="Ingresa la situación"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Cantidad de suites */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Cantidad de suites</label>
                    <input
                      type="number"
                      name="suite_amount"
                      value={formData.suite_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de suites"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Superficie */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Superficie <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="surface"
                      value={formData.surface}
                      onChange={handleInputChange}
                      placeholder="Ingresa la superficie"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Etiquetas */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                        Tags <abbr title="required">*</abbr>
                    </label>
                    <select
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        name="tags"
                        multiple
                        value={selectedTags}
                        onChange={handleTagsChange}
                    >
                        {tags.map((tag) => (
                        <option key={tag.name} value={tag.name}>
                            {tag.name}
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="mb-3 space-y-2 w-full max-w-[80%] text-xs">
                        <p className="font-semibold text-gray-600 py-2">Tags seleccionados:</p>
                        <div className="flex flex-wrap overflow-auto">
                            {formData.tags.map((tag) => (
                            <p key={tag} className="inline-block bg-black text-white px-2 py-1 rounded-lg mr-2 mb-2">
                                {tag} <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-white">&times;</button>
                            </p>
                            ))}
                        </div>
                    </div>

                  {/* input Cantidad de baños de servicio */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Cantidad de baños de servicio <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="number"
                      name="toilet_amount"
                      value={formData.toilet_amount}
                      onChange={handleInputChange}
                      placeholder="Ingresa la cantidad de baños de servicio"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Superficie total */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Superficie total</label>
                    <input
                      type="text"
                      name="total_surface"
                      value={formData.total_surface}
                      onChange={handleInputChange}
                      placeholder="Ingresa la superficie total"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Tipo */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Tipo <abbr title="required">*</abbr>
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      placeholder="Ingresa el tipo"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Superficie destechada */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Superficie destechada</label>
                    <input
                      type="text"
                      name="unroofed_surface"
                      value={formData.unroofed_surface}
                      onChange={handleInputChange}
                      placeholder="Ingresa la superficie destechada"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>
      
                  {/* input Longitud geográfica */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Longitud geográfica</label>
                    <input
                      type="text"
                      name="geo_long"
                      value={formData.geo_long}
                      onChange={handleInputChange}
                      placeholder="Ingresa la longitud geográfica"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>

                  {/* input Latitud geográfica */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">Latitud geográfica</label>
                    <input
                      type="text"
                      name="geo_lat"
                      value={formData.geo_lat}
                      onChange={handleInputChange}
                      placeholder="Ingresa la latitud geográfica"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    />
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    type="submit"
                    className="w-50 px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline shadow-lg transition-colors duration-300"
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}