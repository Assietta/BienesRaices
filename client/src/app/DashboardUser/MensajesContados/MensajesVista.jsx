'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

export default function MensajesVista() {
  const { data: session } = useSession();
  const id = session?.user?.id;

  const [appraisals, setAppraisals] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [orders, setViewOrders] = useState([]);

  const fetchAppraisals = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/appraisals/${id}`
      );
      const data = response.data;
      setAppraisals(data);
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  const fetchOrders = async (id) => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/`);
      const data = response.data;
      setOrders(data);
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  const fetchContacts = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/contact/${id}`);
      const data = response.data;
      setContacts(data);
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  useEffect(() => {
    fetchAppraisals(id);
    fetchOrders(id);
    fetchContacts(id);
  }, []);

  console.log(appraisals);

  return (
    <>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          Tasaciones
        </h1>

        {appraisals?.map((appraisal) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            {appraisal.createdAt && (
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {appraisal.createdAt.slice(0, 10)}
              </time>
            )}
            <h3 class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {`correo electronico: ${appraisal.email}`}
            </h3>
            <p class="mb-4 text-base font-normal font-semibold text-gray-500 dark:text-gray-400">
              {`mensaje: ${appraisal.comment}`}
            </p>
          </li>
        ))}
        <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          Contacto
        </h1>
        {contacts?.map((contact) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            {contact.createdAt && (
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {contact.createdAt.slice(0, 10)}
              </time>
            )}
            <h3 class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {`correo electronico: ${contact.email}`}
            </h3>
            <p class="mb-4 text-base font-normal font-semibold text-gray-500 dark:text-gray-400">
              {`mensaje: ${contact.comment}`}
            </p>
          </li>
        ))}
        <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          Reservas
        </h1>
        {orders?.map((order) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {/* {order.createdAt.slice(0, 10)} */}
            </time>
            <h3 class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {/* {order.name} */}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {/* {truncateComment(order.comment, 10)} */}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
