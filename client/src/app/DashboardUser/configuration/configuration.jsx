"use client"
import { useState } from "react";
import Title from "./title";
import { validateForm } from "./validates";
import axios from "axios";
import { useSession } from "next-auth/react";
import {validatePassword} from "./validatesPassword"
import bcrypt from 'bcryptjs'


export default function FormInfo () {
  const [selectedForm, setSelectedForm] = useState(null);

  const session = useSession();
  const { id, username, password } = session.data.user
  console.log(password);

  async function passwordMatch (formPasswordData, password){
    const a = await bcrypt.compare(
     formPasswordData.password,
      password
    )
    return a

  }
  const userName = session.data.user.name

  const handleFormClick = (formId) => {
    setSelectedForm(formId);
  };

  const [formInfoData, setFormInfoData] = useState({
    name: "",
    lastName: "",

  });
  const [formPasswordData, setFormPasswordData] = useState({
    password: "",
    newPassword: "",
    repeatNewPassword: "",

  });

  const [formEmailData, setFormEmailData] = useState({
    newEmail: "",
    repeatNewEmail: "",

  });

  const [formDeleteData, setFormDeleteData] = useState({
    deleteAcountPassword: "",
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




  const handleInputChangeD = (event) => {
    const { name, value } = event.target;
    setFormDeleteData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const clearFormInfo = () => {
    setFormInfoData({
      name: "",
      lastName: "",


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
      name: "",
      lastName: "",


    });
  };


  const handleSubmitInfo = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formInfoData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formInfoData);
      console.log(id);
      await axios.put(`http://localhost:3001/users/${id}`, formInfoData);
      alert("Informacion Actualizada");
      console.log("Informacion actualizada correctamente");
      clearFormInfo();
    }
  };
  const handleSubmitInfoD = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formInfoData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formInfoData);
      console.log(id);
      await axios.put(`http://localhost:3001/users/${id}`, formInfoData);
      alert("Informacion Actualizada");
      console.log("Informacion actualizada correctamente");
      clearFormInfo();
    }
  };




  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    const validationErrors = validatePassword(formPasswordData, passwordMatch(formPasswordData, password));
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formPasswordData);
    
      await axios.put(`http://localhost:3001/users/${id}`, formPasswordData);
      alert("Informacion Actualizada");
      console.log("Informacion actualizada correctamente");
      clearFormPassword();
    }
  };



  return (
    <div>



      <h2 onClick={() => handleFormClick('form1')}>Datos Personales</h2>
      {selectedForm === 'form1' && (
      <div id = "form1" className="border-b border-gray-700 mt-16">
      <Title tit="Datos Personales" sub="Completa tus datos personales." />
      {/* datos personales */}
      <form onSubmit={handleSubmitInfo} className="mb-8">
        {/* input Name */}
        <div className="mb-3 space-y-2 w-full text-xs">
          <label className="font-semibold text-gray-600 py-2">
            Nombre <abbr title="required">*</abbr>
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="name"
            placeholder={username.split(" ")[0]}
            value={formInfoData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        {/* input apellido */}
        <div className="mb-3 space-y-2 w-full text-xs ">
          <label className="font-semibold text-gray-600 py-2">
            Apellido <abbr title="required">*</abbr>
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

 
              {/* <div className="mb-3 space-y-2 w-full text-xs">
               <label className="font-semibold text-gray-600 py-2">
                 Contraseña actual<abbr title="required">*</abbr>
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
             </div> */}


             {/* input Contraseña nueva */}


              <div className="mb-3 space-y-2 w-full text-xs">
               <label className="font-semibold text-gray-600 py-2">
                 Contraseña nueva <abbr title="required">*</abbr>
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
                 Contraseña nueva <abbr title="required">*</abbr>
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




    </div>
    
  );
};




  // const [formPasswordData, setFormPasswordData] = useState({

  //   password: "",
  //   newPassword: "",
  //   repeatNewPassword: "",
  // });


  // const [formEmailData, setFormEmailData] = useState({
  //   email: "",
  //   password: "",
  //   newEmail: "",
  //   repeatNewEmail: "",

  // });


  // const [formDeleteData, setFormDeleteData] = useState({
  //   password: "",
  //   deleteAcount: "",
  // });










// import { useState } from "react";
// import Title from "./title";
// import { validateForm } from "./validates";
// import axios from "axios";

// export default function Configuration() {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     mobile: "",
//     password: "",
//     newPassword: "",
//     repeatNewPassword: "",
//     newEmail: "",
//     repeatNewEmail: "",
//     deleteAcount: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const clearForm = () => {
//     setFormData({
//       name: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       mobile: "",
//       password: "",
//       newPasword: "",
//       newEmail: "",
//       repeatNewEmail: "",
//       deleteAcount: "",
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log(formData);
//       await axios.post("http://localhost:3001/contact", formData);
//       alert("Contacto enviado");
//       console.log("Contact successfully send");
//       clearForm();
//     }
//   };

//   return (
//     <div>
//       <div className="border-b border-gray-700 mt-16">
//         <Title tit="Datos Personales" sub="Completa tus datos personales." />
//         {/* datos personales */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           {/* input Name */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Nombre <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="name"
//               placeholder="Ingrese su nombre"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             {errors.name && <p>{errors.name}</p>}
//           </div>
//           {/* input apellido */}
//           <div className="mb-3 space-y-2 w-full text-xs ">
//             <label className="font-semibold text-gray-600 py-2">
//               Apellido <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="lastName"
//               placeholder="Ingrese su apellido"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//             {errors.lastName && <p>{errors.lastName}</p>}
//           </div>
//           <button
//                     className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
//                     type="submit"
//                   >
//                     Enviar
//                   </button>
//         </form>
//       </div>

//       <div className="border-b border-gray-700 mt-16">
//         <Title
//           tit="Cambiar contraseña"
//           sub="Modfica la contraseña de tu cuenta"
//         />
//         {/* cambiar contraseña */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           {/* input Contraseña */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Contraseña actual<abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="password"
//               placeholder="Ingresa tu contraseña actual"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             {errors.password && <p>{errors.password}</p>}
//           </div>
//           {/* input Contraseña nueva */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Contraseña nueva <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="newPassword"
//               placeholder="Ingresa tu contraseña nueva"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//             />
//             {errors.newPassword && <p>{errors.newPassword}</p>}
//           </div>
//           {/* input Contraseña nueva Repetir */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Contraseña nueva <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="lastName"
//               placeholder="Repite tu contraseña nueva"
//               value={formData.repeatNewPassword}
//               onChange={handleInputChange}
//             />
//             {errors.repeatNewPassword && <p>{errors.repeatNewPassword}</p>}
//           </div>
//           <button
//             className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
//             type="submit"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>

//       <div className="border-b border-gray-700 mt-16">
//         <Title
//           tit="Cambiar email"
//           sub="Modfica el correo electronico de tu cuenta"
//         />
//         {/* cambiar Email */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           {/* input Contraseña */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Contraseña actual<abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="password"
//               placeholder="Ingresa tu contraseña actual"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             {errors.password && <p>{errors.password}</p>}
//           </div>
//           {/* input Email nuevo */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Email Nuevo <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="newPassword"
//               placeholder="Ingresa tu contraseña nueva"
//               value={formData.newEmail}
//               onChange={handleInputChange}
//             />
//             {errors.newEmail && <p>{errors.newEmail}</p>}
//           </div>
//           {/* input Email nuevo Repetir */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Repite el nuevo Email <abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="repeatNewEmail"
//               placeholder="Repite tu contraseña nueva"
//               value={formData.repeatNewEmail}
//               onChange={handleInputChange}
//             />
//             {errors.repeatNewEmail && <p>{errors.repeatNewEmail}</p>}
//           </div>
//           <button
//             className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
//             type="submit"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>

//       <div className="border-b border-gray-700 mt-16">
//         <Title
//           tit="Eliminar mi cuenta"
//           sub="Eliminar tu cuenta de MR propiedades, eliminara tu perfil y todos los datos de tu actividad"
//         />
//         {/* Eliminar cuenta */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           {/* input Eliminar cuenta */}
//           <div className="mb-3 space-y-2 w-full text-xs">
//             <label className="font-semibold text-gray-600 py-2">
//               Contraseña<abbr title="required">*</abbr>
//             </label>
//             <input
//               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
//               type="text"
//               name="password"
//               placeholder="Contraseña"
//               value={formData.deleteAcount}
//               onChange={handleInputChange}
//             />
//             {errors.deleteAcount && <p>{errors.deleteAcount}</p>}
//           </div>

//           <button
//             className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
//             type="submit"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
