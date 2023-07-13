"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const DashboardTestimonials = (props) => {
  const { id, userId, username, rating, text, disabled } = props;
  const [isTestimonialDisabled, setIsTestimonialDisabled] = useState(true);

  const handleDisableTestimonial = async () => {
    try {
      let response;

      if (isTestimonialDisabled) {
        response = await axios.put(`http://localhost:3001/testimonials/${id}`, {
          disabled: false,
        });
        console.log(response.status);
        if (response.status === 200) {
          setIsTestimonialDisabled(false);
        } else {
          alert("No se pudo habilitar el testimonio");
        }
      } else {
        response = await axios.put(`http://localhost:3001/testimonials/${id}`, {
          disabled: true,
        });
        console.log(response.status);
        if (response.status === 200) {
          setIsTestimonialDisabled(true);
        } else {
          alert("No se pudo deshabilitar al testimonio");
        }
      }

      console.log("Respuesta de Axios:", response.data);
    } catch (error) {
      console.error("Error al actualizar el estado del testimonio", error);
    }
  };

  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-2 font-bold">
        <div className="inline-flex space-x-3 items-center">
          <span>{username}</span>
        </div>
      </td>
      <td className="py-3 px-2">{rating}</td>
      <td className="py-3 px-2">{text}</td>
      <td className="py-3 px-2 flex justify-center">
        <div className="inline-flex items-center space-x-3 cursor-pointer">
          <a
            title="Suspend user"
            className={
              isTestimonialDisabled ? "text-red-600 w-5 h-5" : "w-5 h-5"
            }
            onClick={handleDisableTestimonial}
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

export default DashboardTestimonials;
