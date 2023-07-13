'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MensajesPerfil from './MensajesPerfil';
import { useSession } from 'next-auth/react';

export default function Mensajes() {
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
      const response = await axios.get(`http://localhost:3001/orders/${id}`);
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
    <div id="last-users">
      <h1 className="font-bold py-4 uppercase">Mensajes contactados</h1>
      <table className="w-full whitespace-nowrap">
        <thead className="bg-black/60">
          <th className="text-left py-3 px-2 rounded-l-lg">Tipo de mensaje</th>
          <th className="text-left py-3 px-2">Fecha</th>
          <th className="text-left py-3 px-2">Mensaje</th>
          <th className="text-left py-3 px-2">Email</th>
        </thead>
        {appraisals.map((message) => (
          <MensajesPerfil
            key={message ? message.id : ''}
            created={message ? message.createdAt : ''}
            comment={message ? message.comment : ''}
            email={message ? message.email : ''}
            name={'Tasacion'}
          />
        ))}
        {contacts.map((message) => (
          <MensajesPerfil
            key={message ? message.id : ''}
            created={message ? message.createdAt : ''}
            comment={message ? message.comment : ''}
            email={message ? message.email : ''}
            name={'Contacto'}
          />
        ))}
      </table>
    </div>
  );
}
