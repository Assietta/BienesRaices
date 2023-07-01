"use client"
import { useState } from 'react';
import styles from './contact.module.css';
import { validateForm } from './validates';
import axios from 'axios';

export default function Example() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    comment: '',
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
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      await axios.post('http://localhost:3001/contact', formData);
      console.log('Appraisals successfully send');
      clearForm();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover">
      <div className="mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Nosotros
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Formulario Contacto
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Puedes dejar tu consulta, junto a los datos requeridos, a la
            brevedad nos comunicaremos contigo.
          </p>
        </div>
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
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="name"
                      placeholder="Ingrese su nombre"
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
                      Mail <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="nombre@dominio.com"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
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
                      Telefono <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="ingrese su numero de telefono"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
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
                      placeholder="ingrese su numero de celular"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                  </div>

                  {/* comentario input */}
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Mensaje
                    </label>
                    <textarea
                      required=""
                      name="comment"
                      id=""
                      className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4"
                      placeholder="Ingrese su mensaje aquí"
                      spellCheck="false"
                      value={formData.comment}
                      onChange={handleInputChange}
                    />
                    {errors.comment && <p>{errors.comment}</p>}
                  </div>

                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
