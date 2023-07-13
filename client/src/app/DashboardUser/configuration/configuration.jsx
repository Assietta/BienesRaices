"use client"
import { useState } from "react";
import Title from "./title";
import validateForm  from "./validates";
import axios from "axios";
import { useSession } from "next-auth/react";
import validatePassword from "./validatesPassword"
import bcrypt from 'bcryptjs'
import { useEffect } from "react";
import validateDelete from "./validatesDelete"
import validateEmail from "./validatesEmail"



export default function FormInfo () {
  const [selectedForm, setSelectedForm] = useState(null);
  const [userPassword, setUserPassword] = useState();

  const session = useSession();
  const { id, username,} = session.data.user


  const fetchPassword = async (id) => {

    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);

      const password = response.data.password;

 
      setUserPassword(password);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPassword(id);
  }, )







  const handleFormClick = (formId) => {
    setSelectedForm(formId);
  };

  const [formInfoData, setFormInfoData] = useState({
   username:""

  });
  const [formPasswordData, setFormPasswordData] = useState({
    password: "",
    newPassword: "",
    repeatNewPassword: "",

  });

  const [formEmailData, setFormEmailData] = useState({
    password:"",
    newEmail: "",
    repeatNewEmail: "",

  });

  const [formDeleteData, setFormDeleteData] = useState({
    deleteAccountPassword: "",
  });




  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormInfoData((prevFormData) => ({

      ...prevFormData,
      [name]: value,
    }));
  };


  const handleInputChangeP = (event) => {
    const { name, value } = event.target;
    setFormPasswordData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeEmail = (event) => {
    const { name, value } = event.target;

    setFormEmailData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  const handleInputChangeD = (event) => {
    const { name, value } = event.target;
    setFormDeleteData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const clearFormInfo = () => {
    setFormInfoData({
      username:""


    });
  };
  const clearFormPassword = () => {
    setFormPasswordData({
      password: "",
      newPassword: "",
      repeatNewPassword: "",


    });
  };
  
  const clearFormInfoD = () => {
    setFormDeleteData({
      deleteAccountPassword: "",


    });
  };
  const clearFormInfoEmail = () => {
    setFormDeleteData({
      password:"",
      newEmail: "",
      repeatNewEmail: ""


    });
  };

  const handleSubmitInfo = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formInfoData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      await axios.put(`http://localhost:3001/users/${id}`, formInfoData);
      alert("Informacion Actualizada");

      clearFormInfo();
    }
  };
  const handleSubmitInfoEmail = async (event) => {
    event.preventDefault();
    const validationErrors = await validateEmail(formEmailData, userPassword);
    setErrors(validationErrors);


    if (Object.keys(validationErrors).length === 0) {
      let send = {email:formEmailData.repeatNewEmail};

      await axios.put(`http://localhost:3001/users/${id}`, send);
      alert("Informacion Actualizada");

      clearFormInfoEmail();
    }
  };




  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    const validationErrors = await validatePassword(formPasswordData, userPassword);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let send = {password:formPasswordData.repeatNewPassword};
    
      await axios.put(`http://localhost:3001/users/${id}`, send);
      alert("Informacion Actualizada");

      clearFormPassword();
    }
  };

  const handleSubmitDelete = async (event) => {
    event.preventDefault();
    const validationErrors = await validateDelete(formDeleteData, userPassword);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let send= {disabled:true}

    
      await axios.put(`http://localhost:3001/users/${id}`, send );
      alert("Informacion Actualizada");

      clearFormInfoD();
    }
  };



  return (
    <div id="accordion-collapse" data-accordion="collapse">



      <h2 onClick={() => handleFormClick('form1')}>Datos Personales</h2>
      {selectedForm === 'form1' && (
      <div id = "form1" className="border-b border-gray-700 mt-16">
      <Title tit="Datos Personales" sub="Completa tus datos personales." />
      {/* datos personales */}
      <form onSubmit={handleSubmitInfo} className="mb-8">
        {/* input Name */}
        <div className="mb-3 space-y-2 w-full text-xs">
          <label className="font-semibold text-gray-600 py-2">
            Nombre de usuario  
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="username"
            placeholder={username}
            value={formInfoData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        {/* input apellido */}
        {/* <div className="mb-3 space-y-2 w-full text-xs ">
          <label className="font-semibold text-gray-600 py-2">
            Apellido  
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="lastName"
            placeholder={username.split(" ")[1]}
            value={formInfoData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>*/}
        <button
                  className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  type="submit"
                >
                  Enviar
                </button> 
      </form>
    </div>
      )}




 <h2 onClick={() => handleFormClick('form2')}>Cambiar contraseña</h2>
      {selectedForm === 'form2' && (
           <div id ="form 2" className="border-b border-gray-700 mt-16">
           <Title
             tit="Cambiar contraseña"
             sub="Modfica la contraseña de tu cuenta"
          />


           cambiar contraseña 


            <form onSubmit={handleSubmitPassword} className="mb-8">
             
             
             {/* input Contraseña */}

 
              <div className="mb-3 space-y-2 w-full text-xs">
               <label className="font-semibold text-gray-600 py-2">
                 Contraseña actual 
               </label>
               <input
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                 type="text"
                 name="password"
                 placeholder="Ingresa tu contraseña actual"
                 value={formPasswordData.password}
                 onChange={handleInputChangeP}
               />
               {errors.password && <p>{errors.password}</p>}
             </div>


             {/* input Contraseña nueva */}


              <div className="mb-3 space-y-2 w-full text-xs">
               <label className="font-semibold text-gray-600 py-2">
                 Contraseña nueva  
               </label>
               <input
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                 type="text"
                 name="newPassword"
                 placeholder="Ingresa tu contraseña nueva"
                 value={formPasswordData.newPassword}
                 onChange={handleInputChangeP}
               />
               {errors.newPassword && <p>{errors.newPassword}</p>}
             </div> 


             {/* input Contraseña nueva Repetir */}


             <div className="mb-3 space-y-2 w-full text-xs">
               <label className="font-semibold text-gray-600 py-2">
                 Contraseña nueva  
               </label>
               <input
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                 type="text"
                 name="repeatNewPassword"
                 placeholder="Repite tu contraseña nueva"
                 value={formPasswordData.repeatNewPassword}
                 onChange={handleInputChangeP}
               />
               {errors.repeatNewPassword && <p>{errors.repeatNewPassword}</p>}
             </div>
             <button
               className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
               type="submit"
             >
               Enviar
             </button>
           </form>
         </div>
      )} 


<h2 onClick={() => handleFormClick('form3')}>Cambiar email</h2>
      {selectedForm === 'form3' && (
             <div id="form3"  className="border-b border-gray-700 mt-16">
             <Title
               tit="Cambiar email"
               sub="Modfica el correo electronico de tu cuenta"
             />
             {/* cambiar Email */}
             <form onSubmit={handleSubmitInfoEmail} className="mb-8">
               {/* input Contraseña */}
               <div className="mb-3 space-y-2 w-full text-xs">
                 <label className="font-semibold text-gray-600 py-2">
                   Contraseña actual 
                 </label>
                 <input
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                   type="text"
                   name="password"
                   placeholder="Ingresa tu contraseña actual"
                   value={formEmailData.password}
                   onChange={handleInputChangeEmail}
                 />
                 {errors.password && <p>{errors.password}</p>}
               </div>
               {/* input Email nuevo */}
               <div className="mb-3 space-y-2 w-full text-xs">
                 <label className="font-semibold text-gray-600 py-2">
                   Email Nuevo  
                 </label>
                 <input
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                   type="text"
                   name="newEmail"
                   placeholder="Ingresa tu email nuevo"
                   value={formEmailData.newEmail}
                   onChange={handleInputChangeEmail}
                 />
                 {errors.newEmail && <p>{errors.newEmail}</p>}
               </div>
               {/* input Email nuevo Repetir */}
               <div className="mb-3 space-y-2 w-full text-xs">
                 <label className="font-semibold text-gray-600 py-2">
                   Repite el nuevo Email  
                 </label>
                 <input
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                   type="text"
                   name="repeatNewEmail"
                   placeholder="Repite tu email nuevo"
                   value={formEmailData.repeatNewEmail}
                   onChange={handleInputChangeEmail}
                 />
                 {errors.repeatNewEmail && <p>{errors.repeatNewEmail}</p>}
               </div>
               <button
                 className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                 type="submit"
               >
                 Enviar
               </button>
             </form>
           </div>
      )}



<h2 onClick={() => handleFormClick('form4')}>Eliminar cuenta</h2>
      {selectedForm === 'form4' && (
             <div id="form4"  className="border-b border-gray-700 mt-16">
             <Title
               t tit="Eliminar mi cuenta"
               sub="Eliminar tu cuenta de MR propiedades, eliminara tu perfil y todos los datos de tu actividad"
             />
             {/* Eliminar cuenta */}
             <form onSubmit={handleSubmitDelete} className="mb-8">
               {/* input Eliminar cuenta */}
               <div className="mb-3 space-y-2 w-full text-xs">
                 <label className="font-semibold text-gray-600 py-2">
                   Contraseña  
                 </label>
                 <input
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                   type="text"
                   name="deleteAccountPassword"
                   placeholder="Contraseña"
                   value={formDeleteData.deleteAccountPassword}
                   onChange={handleInputChangeD}
                 />
                 {errors.deleteAccountPassword && <p>{errors.deleteAccountPassword}</p>} 
               </div>
               
               <button
                 className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                 type="submit"
               >
                 Eliminar
               </button>
             </form>
           </div>
             )} 


    </div>
    
  );
};




 
