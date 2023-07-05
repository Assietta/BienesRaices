'use client';
import { useState } from 'react';
import { validateForm } from './validates';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
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
      username: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      await axios.post('http://localhost:3001/users', formData);
      console.log('Signup successfully send');
      alert('Registro exitoso');
      clearForm();
      router.push("/Login")
    }
  };

 return (
   <div className="min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover">
     <div className="mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10 pl-4 pr-4">
       <div className="mx-auto max-w-2xl lg:text-center">
         <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
         <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Registrarse
         </p>
       </div>
       <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
         <dl className="max-w-xl mr-12 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
           <div className="relative pl-12">
             <dt className="text-base font-semibold leading-7 text-gray-900"></dt>
             <dd className="mt-2 text-base leading-7 text-gray-600">
               <form onSubmit={handleSubmit}>
                 {/* input Name */}
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
                     Usuario <abbr title="required">*</abbr>
                   </label>
                   <input
                     placeholder="Ingresa tu nombre"
                     className="w-full bg-gray-200 text-gray-800 border border-gray-200 rounded-lg h-10 px-4 mt-2"
                     type="text"
                     name="username"
                     value={formData.username}
                     onChange={handleInputChange}
                   />
                   {errors.username && <p>{errors.username}</p>}
                 </div>
                 {/* input apellido */}
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
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
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
                     correo electronico <abbr title="required">*</abbr>
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

                 {/* input celular */}
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
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

                 {/* input password */}
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
                     Contraseña <abbr title="required">*</abbr>
                   </label>
                   <input
                     placeholder="ingrese contraseña"
                     className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                     required="required"
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleInputChange}
                   />
                   {errors.password && <p>{errors.password}</p>}
                 </div>

                 {/* input password confirm */}
                 <div className="mb-3 space-y-2 w-full text-xs pl-0 pr-0">
                   <label className="font-semibold text-gray-600 py-2">
                     {' '}
                     Confirmar Contraseña <abbr title="required">*</abbr>
                   </label>
                   <input
                     placeholder="confirmar contraseña"
                     className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                     required="required"
                     type="password"
                     name="confirmPassword"
                     value={formData.confirmPassword}
                     onChange={handleInputChange}
                   />
                   {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                 </div>

                 <button
                   className="mx-auto block mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                   type="submit"
                 >
                   Enviar{' '}
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
