"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

export default function MensajesVista() {
  const session = useSession();
  const id = session.data.user.id
// console.log(id)
  const [Messages, setMessages] = useState({
    Appraisals: [],
    Contacts: [],
    Orders: [],
    Favorits: [],
  });
  // console.log(Messages);

  const fetchAppraisals = async () => {
    try {
      const response = await axios.get(
        `https://bienesraices-production-9eb3.up.railway.app/appraisals/${id}`
      );
      const data = response.data;
      setMessages({ Appraisals: [data] });
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            `https://bienesraices-production-9eb3.up.railway.app/orders/${id}`
          );
          const data = response.data;
          console.log(response);
          setMessages({ Orders: [data] });
        } catch (error) {
          // Manejar el error de la solicitud
        }
  };
  
    console.log(Messages);
    useEffect(() => {
      fetchAppraisals();
      fetchOrders()
    }, []);
  
   const truncateComment = (comment, maxLength) => {
     if (comment.length <= maxLength) {
       return comment;
     } else {
       const truncated = comment.substr(0, maxLength);
       return truncated.substr(0, truncated.lastIndexOf(' ')) + '...';
     }
   };
//   console.log(id);
// console.log(Messages);
  return (
    <>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <h1>Tasaciones</h1>
        {Messages?.Appraisals?.map((appraisal) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {appraisal.createdAt.slice(0, 10)}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 text-white">
              {appraisal.name}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {truncateComment(appraisal.comment, 10)}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {appraisal.comment.length > 10 ? ' Learn more' : ''}
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
        <h1>Contacto</h1>
        {Messages?.Contacts?.map((contact) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {appraisal.createdAt.slice(0, 10)}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 text-white">
              {appraisal.name}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {truncateComment(appraisal.comment, 10)}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {appraisal.comment.length > 10 ? ' Learn more' : ''}
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
        <h1>Reservas</h1>
        {Messages?.Orders?.map((Order) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {appraisal.createdAt.slice(0, 10)}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 text-white">
              {appraisal.name}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {truncateComment(appraisal.comment, 10)}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {appraisal.comment.length > 10 ? ' Learn more' : ''}
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
        <h1>Reservas</h1>
        {Messages?.Favorits?.map((favorit) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {appraisal.createdAt.slice(0, 10)}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 text-white">
              {appraisal.name}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {truncateComment(appraisal.comment, 10)}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {appraisal.comment.length > 10 ? ' Learn more' : ''}
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}
