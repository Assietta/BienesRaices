import { useState } from "react";
import Title from "./title";
import validateForm from "./validates";
import axios from "axios";
import { useSession } from "next-auth/react";
import validatePassword from "./validatesPassword";
import bcrypt from "bcryptjs";
import { useEffect } from "react";
import validateDelete from "./validatesDelete";
import validateEmail from "./validatesEmail";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FormInfo() {
  const[refresh,setRefresh] = useState(false)
  const [selectedForm, setSelectedForm] = useState(null);
  const [userPassword, setUserPassword] = useState();
  
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const session = useSession();
  const { id, username } = session.data.user;

  const fetchPassword = async (id) => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`);

      const password = response.data.password;
      setUserPassword(password);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPassword(id)

  }, []);

 

  const handleFormClick = (formId) => {
    if (selectedForm === formId) {
      setSelectedForm(null); // Cierra el formulario si se hace clic en el mismo elemento
    } else {
      setSelectedForm(formId);
    }
  };

  const [formInfoData, setFormInfoData] = useState({
    username: ""
  });

  const [formPasswordData, setFormPasswordData] = useState({
    password: "",
    newPassword: "",
    repeatNewPassword: ""
  });

  const [formEmailData, setFormEmailData] = useState({
    password: "",
    newEmail: "",
    repeatNewEmail: ""
  });

  const [formDeleteData, setFormDeleteData] = useState({
    deleteAccountPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfoData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleInputChangeP = (event) => {
    const { name, value } = event.target;
    setFormPasswordData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleInputChangeEmail = (event) => {
    const { name, value } = event.target;
    setFormEmailData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleInputChangeD = (event) => {
    const { name, value } = event.target;
    setFormDeleteData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const clearFormInfo = () => {
    setFormInfoData({
      username: ""
    });
  };

  const clearFormPassword = () => {
    setFormPasswordData({
      password: "",
      newPassword: "",
      repeatNewPassword: ""
    });
  };

  const clearFormInfoD = () => {
    setFormDeleteData({
      deleteAccountPassword: ""
    });
  };

  const clearFormInfoEmail = () => {
    setFormEmailData({
      password: "",
      newEmail: "",
      repeatNewEmail: ""
    });
  };

  const handleSubmitInfo = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formInfoData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, formInfoData).then(()=>{window?.location?.reload()})
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

      await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, send);
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
    
      await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, send);
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

    
      await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, send );
      alert("Informacion Actualizada");
      clearFormInfoD();
    }
  };

  return (
    <div>
            <Title tit="Configuracion" sub="   " />
       <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
Datos Personales
        </AccordionHeader>
        <AccordionBody>
        <div id = "form1" className="border-b border-gray-700 mt-16">
      <Title tit=" " sub="Completa tus datos personales." />
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

        <button
                  className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  type="submit"
                >
                  Enviar
                </button> 
      </form>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Cambiar Contraseña
        </AccordionHeader>
        <AccordionBody>
        <div id ="form 2" className="border-b border-gray-700 mt-16">
           <Title
             tit=" "
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Cambiar Email
        </AccordionHeader>
        <AccordionBody>
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Eliminar Cuenta
        </AccordionHeader>
        <AccordionBody>
        <div id="form4"  className="border-b border-gray-700 mt-16">
             <Title
               t tit="  "
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
        </AccordionBody>
      </Accordion>
    </Fragment>
    
    </div>
   
  );
}



 
