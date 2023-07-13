'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import UsersDashboard from './MensajesContados/MensajesPerfil/Mensajes';
import PropiedadesDashboard from './propiedades/propiedadesDashboard';
import Mensajes from './MensajesContados/MensajesPerfil/Mensajes';
import MensajesVista from './MensajesContados/MensajesVista';
import Configuration from "./configuration/configuration";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import FavConteiner from "./Favorites/FavConteiner"
import FormInfoP from "./configuration/prueba"

export default function Example() {

  const router = useRouter();
  const session = useSession();
  
  if (session.status === 'unauthenticated') router.push('/');

  const [showDashboard, setShowDashboard] = useState({
    Favorito: false,
    Perfil: true,
    Mensaje: false,
    Configuration: false,
  });

  const showSection = (param) => {
    setShowDashboard((prevState) => ({
      Favorito: false,
      Perfil: false,
      Mensaje: false,
      Configuracion: false,
      [param]: true,
    }));
  };

  return (
    <div className="bg-white">
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
              Mi perfil<span className="text-indigo-400"></span>
            </h1>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                {session.status === 'authenticated' ? (
                  <Image
                    className="rounded-full w-10 h-10 relative object-cover"
                    src={session.data.user.image}
                    alt=""
                    height={100}
                    width={100}
                  />
                ) : (
                  ''
                )}
              </div>
              <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">
                  {session.status === 'authenticated'
                    ?  session.data.user.username || session.data.user.name 
                    : ''}
                </p>
                <span className="text-xs text-slate-400">MR Inmobiliaria</span>
              </div>
            </a>
            <hr className="my-2 border-slate-700" />
            <div id="menu" className="flex flex-col space-y-2 my-5">
              <a
                href="#1"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
                onClick={() => showSection('Perfil')}
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
                    <button className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Perfil
                    </button>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Información general
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#2"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
                onClick={() => showSection('Mensaje')}
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
                    <button className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Mensajes contactados
                    </button>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Ver/Responder Mensajes
                    </p>
                  </div>
                  <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">
                    23
                  </div>
                </div>
              </a>
              <a
                href="#3"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
                onClick={() => showSection('Favorito')}
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
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Favoritos
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Propiedades favoritas
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#4"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
                onClick={() => showSection('Configuration')}
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
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Configuración
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Editar configuración
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
            {showDashboard.Perfil && (
              <>
                <PropiedadesDashboard />
                <Mensajes />
              </>
            )}
            {showDashboard.Mensaje && <MensajesVista />}
            {showDashboard.Configuration && <Configuration />}
            {showDashboard.Favorito && <FavConteiner />}
          </div>
        </div>
      </div>
    </div>
  );
}
