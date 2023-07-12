'use client';
import { useState } from 'react';

import { validateForm } from '../Appraisals/validates';
import axios from 'axios';
import Title from "./title"
import { useSession } from 'next-auth/react'

export default function Example() {
  const session = useSession()
  const id = session.data.user.id;

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    comment: '',
    address: '',
    callTime: '',
    userId: `${id}`
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      mobile: '',
      comment: '',
      address: '',
      callTime: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await axios.post('https://bienesraices-production-9eb3.up.railway.app/appraisals', {...formData, userId: session?.data.user.id});
      alert("Tasacion enviada")
      console.log('Appraisals successfully send');
       clearForm();
    }
   
  };

  return (
    <div class=" min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover ">
      <div className=" mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <Title/>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="max-w-xl mr-12 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900"></dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <form onSubmit={handleSubmit}>
                  {/* input Name */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Nombre <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Ingresa tu nombre"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>

                  {/* input apellido */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Apellido <abbr title="required">*</abbr>
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="lastName"
                      placeholder="Ingrese su apellido"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                  </div>

                  {/* input mail */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Correo electrónico <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="nombre@dominio.com"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="text"
                      name="email"
                      id="integration_shop_name"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>

                  {/* input telefono */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Teléfono <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Ingrese su número de teléfono"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </div>

                  {/* input celular */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Celular <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Ingrese su número de celular"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                  </div>

                  {/* direccion input */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Dirección <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Ingrese su dirección"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                  </div>

                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Franja Horaria <abbr title="required">*</abbr>
                    </label>
                    <select
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      name="callTime"
                      value={formData.callTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noche">Noche</option>
                    </select>
                    {errors.callTime && <p>{errors.callTime}</p>}
                  </div>

                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Comentario
                    </label>
                    <textarea
                      placeholder="Deja tu comentario"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-20 px-4 resize-none"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                    />
                    {errors.comment && <p>{errors.comment}</p>}
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-50 px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline shadow-lg transition-colors duration-300"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
