import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="https://i.ibb.co/pzFrvn1/logo-png-white.png"
              width={100}
              height={100}
              className="h-24 w-auto mr-3"
              alt="Inmobiliaria Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                key={"/"}
                href={"/"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                key={"/About"}
                href={"/About"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                key={"/Appraisals"}
                href={"/Appraisals"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Tasaciones
              </Link>
            </li>
            <li>
              <Link
                key={"/Contact"}
                href={"/Contact"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 md:p-8">
          Todas las medidas enunciadas son meramente orientativas, las medidas
          exactas serán las que se expresen en el respectivo título de propiedad
          de cada inmueble. Todas las fotos, imagenes y videos son meramente
          ilustrativos y no contractuales. Los precios enunciados son meramente
          orientativos y no contractuales..
        </span>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            M - R Propiedades
          </a>
          © Software Inmobiliario - Tokko Broker
        </span>
      </div>
    </footer>
  );
}
