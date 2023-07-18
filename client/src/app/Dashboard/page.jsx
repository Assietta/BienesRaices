'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import PropiedadesDashboard from './propiedades/propiedadesDashboard';
import DashboardUser from './users/DashboardUser';
import DashboardContacts from './contacts/DashboardContacts';
import DashboardOrders from './orders/DashboardOrders';
import GeneralDashboard from './general/GeneralDashboard';
import { useRouter } from 'next/navigation';

export default function Example() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const session = useSession();
  const [viewUsers, setViewUsers] = useState([]);
  const [contacts, setContacts] = useState([]);

  if (session?.data?.user?.rol !== 'admin') router.push('/');

  useEffect(() => {
    fetchDataUsers();
  }, []);

  const fetchDataUsers = async () => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/users/`);
      const data = response.data.users;
      setViewUsers(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };

  const [viewOrders, setViewOrders] = useState([]);

  useEffect(() => {
    fetchDataOrders();
  }, []);

  const fetchDataOrders = async () => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/orders/`);
      const data = response.data.orders;
      setViewOrders(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  const filteredOrders = viewOrders.filter((order, index, self) => {
    // Filtrar las órdenes por payment_id único
    return index === self.findIndex((o) => o.payment_id === order.payment_id);
  });
  // Calcula la suma de los montos de cada orden
  const totalAmount = filteredOrders.reduce(
    (sum, order) => sum + Number(order.transaction_amount),
    0
  );

  const formattedTotalAmount = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(totalAmount);

  const autenticated = () => {
    if (session.status === 'authenticated') {
      return true;
    } else session.status === 'unauthenticated';{
      router.push('/login'); 
      return false;
    }
  };

  useEffect(() => {
    fetchDataContacts();
  }, []);

  const fetchDataContacts = async () => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/contact/`);
      const data = response.data;
      setContacts(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };

  return (
    <div className="bg-white">
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
              Dashboard<span className="text-indigo-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mb-2">Bienvenido,</p>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <div className="flex space-x-4">
                  {!autenticated() ? (
                    <p></p>
                  ) : (
                    <>
                      {session.data.user?.image && (
                        <Image
                          className="hidden h-10 w-auto lg:block rounded-full"
                          src={session.data.user.image}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      )}
                      <h3 className="text-gray-300 rounded-md px-3 py-2 -sm font-medium">
                        {`${
                          session.data.user.name || session.data.user.username
                        }`}
                      </h3>
                    </>
                  )}
                </div>
              </div>
            </a>
            <hr className="my-2 border-slate-700"></hr>
            <div id="menu" className="flex flex-col space-y-2 my-5">
              <a
                href="#"
                className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${
                  selectedMenu === 'dashboard' ? 'bg-white/10' : ''
                }`}
                onClick={() => setSelectedMenu('dashboard')}
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Dashboard
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Información general
                    </p>
                  </div>
                </div>
              </a>
              {/* <a
                href="#"
                className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${
                  selectedMenu === "dashboard" ? "bg-white/10" : ""
                }`}
                onClick={() => setSelectedMenu("propiedades")}
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Propiedades
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Listado de propiedades
                    </p>
                  </div>
                </div>
              </a> */}
              <a
                href="#"
                className={`hover:bg-white/10 hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${
                  selectedMenu === 'dashboard' ? 'bg-white/10' : ''
                }`}
                onClick={() => setSelectedMenu('orders')}
              >
                <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Reservas
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Ver estado de reservas
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${
                  selectedMenu === 'dashboard' ? 'bg-white/10' : ''
                }`}
                onClick={() => setSelectedMenu('users')}
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Usuarios
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Opciones de usuarios
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${
                  selectedMenu === 'dashboard' ? 'bg-white/10' : ''
                }`}
                onClick={() => setSelectedMenu('contacts')}
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Mensajes
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Mensajes recibidos
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-sm text-center text-gray-600">
              v2.0.0.3 | &copy; 2023
            </p>
          </div>
          <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
            <div id="24h" className="m-4">
              <h1 className="font-bold py-4 uppercase">Estadísticas</h1>
              <div
                id="stats"
                className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div className="bg-black/60 to-white/5 p-6 rounded-lg">
                  <div className="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                        Usuarios
                      </p>
                      <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>{viewUsers.length}</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/60 p-6 rounded-lg">
                  <div className="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                        Ingresos
                      </p>
                      <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>{formattedTotalAmount}</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/60 p-6 rounded-lg">
                  <div className="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                        Mensajes
                      </p>
                      <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                        <span>{contacts.length}</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
              {selectedMenu === 'dashboard' && <GeneralDashboard />}
              {selectedMenu === 'users' && (
                <div id="last-users">
                  <h1 className="font-bold py-4 uppercase">Usuarios</h1>
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                      <tr>
                        <th className="text-left py-3 px-2 rounded-l-lg">
                          Nombre
                        </th>
                        <th className="text-left py-3 px-2">Email</th>
                        <th className="text-left py-3 px-2">Rol</th>
                        <th className="text-left py-3 px-2 rounded-r-lg">
                          Deshabilitar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewUsers.map((user) => (
                        <DashboardUser
                          key={user.id}
                          id={user.id}
                          provider={user.provider}
                          image={user.image}
                          username={user.username}
                          email={user.email}
                          rol={user.rol}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {selectedMenu === 'contacts' && (
                <div id="last-users">
                  <h1 className="font-bold py-4 uppercase">Mensajes</h1>
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                      <tr>
                        <th className="text-left py-3 px-2 rounded-l-lg">
                          Email
                        </th>
                        <th className="text-left py-3 px-2">Nombre</th>
                        <th className="text-left py-3 px-2">Apellido</th>
                        <th className="text-left py-3 px-2 rounded-r-lg">
                          Mensaje
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <DashboardContacts
                          comment={contact.comment}
                          email={contact.email}
                          name={contact.name}
                          lastName={contact.lastName}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {/* {selectedMenu === "propiedades" && <PropiedadesDashboard />} */}
              {selectedMenu === 'orders' && (
                <div id="last-users">
                  <h1 className="font-bold py-4 uppercase">Reservas</h1>
                  <div
                    id="stats"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  >
                    {filteredOrders.map((order) => (
                      <DashboardOrders
                        key={order.id}
                        id={order.id}
                        paymentId={order.payment_id}
                        address={order.address_of_property_to_reserveDB}
                        monto={order.transaction_amount}
                        username={order.usernameDB}
                        email={order.payer_emailDB}
                        status={order.status_approved_rejected}
                        acreditacion={order.status_detail_accredited}
                        date={order.date_approved}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
