"use client"
import { useState } from "react";
import Title from "./title";
import { validateForm } from "./validates";
import axios from "axios";
import { useSession } from "next-auth/react";


export default function FormInfo () {
  const [selectedForm, setSelectedForm] = useState(null);

  const session = useSession();
  const { id, username } = session.data.user;

  // const userName = session.data.user.name

  const handleFormClick = (formId) => {
    setSelectedForm(formId);
  };

  const [formInfoData, setFormInfoData] = useState({
    name: "",
    lastName: "",

  });


  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfoData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormInfoData({
      name: "",
      lastName: "",


    });
  };

  // email: "",
  // phone: "",
  // mobile: "",

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
      clearForm();
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

     


    </div>
    
  );
};