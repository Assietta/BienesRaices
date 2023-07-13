"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const DashboardUser = (props) => {
  const { id, provider, username, email, image, rol } = props;
  const [isUserDisabled, setIsUserDisabled] = useState(false);

  const handleDisableUser = async () => {
    try {
      let response;

      if (isUserDisabled) {
        response = await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, {
          disabled: false,
        });
        console.log(response.status);
        if (response.status === 200) {
          setIsUserDisabled(false);
        } else {
          alert("No se pudo habilitar al usuario");
        }
      } else {
        response = await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`, {
          disabled: true,
        });
        console.log(response.status);
        if (response.status === 200) {
          setIsUserDisabled(true);
        } else {
          alert("No se pudo deshabilitar al usuario");
        }
      }

      console.log("Respuesta de Axios:", response.data);
    } catch (error) {
      console.error("Error al actualizar el estado del usuario", error);
    }
  };

  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-2 font-bold">
        <div className="inline-flex space-x-3 items-center">
          <span>
            {/* <Image className="rounded-full w-8 h-8" src={image} alt="img user">
              {image}
            </Image> */}
          </span>
          <span>{username}</span>
        </div>
      </td>
      <td className="py-3 px-2">{email}</td>
      <td className="py-3 px-2">{rol}</td>
      <td className="py-3 px-2 flex justify-center">
        <div className="inline-flex items-center space-x-3 cursor-pointer">
          <a
            title="Suspend user"
            className={isUserDisabled ? "text-red-600 w-5 h-5" : "w-5 h-5"}
            onClick={handleDisableUser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeinecap="round"
                strokeinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default DashboardUser;
