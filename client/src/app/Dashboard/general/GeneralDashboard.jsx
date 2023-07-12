"use client";
import axios from "axios";
import FileDownload from "js-file-download";
import Link from "next/link";

export default function GeneralDashboard() {
  const downloadUsers = async () => {
    const res = await axios.get("https://bienesraices-production-9eb3.up.railway.app/download/users");
    FileDownload(res.data, "TableUsers.xlsx");
  };

  const downloadOrders = async () => {
    const res = await axios.get("https://bienesraices-production-9eb3.up.railway.app/download/orders");
    FileDownload(res.data, "TableOrders.xlsx");
  };

  const downloadRealStates = async () => {
    const res = await axios.get("https://bienesraices-production-9eb3.up.railway.app/download/realstate");
    FileDownload(res.data, "TableRealStates.xlsx");
  };

  return (
    <>
      <div id="last-users">
        <h1 className="font-bold py-4 uppercase">Bases de datos</h1>
        <div id="stats" className="flex flex-wrap">
          <button
            className="bg-white text-black rounded-xl w-auto p-3 m-2"
            onClick={downloadUsers}
          >
            Descargar listado de usuarios
          </button>
          <button
            className="bg-white text-black rounded-xl w-auto p-3 m-2"
            onClick={downloadOrders}
          >
            Descargar listado de reservas
          </button>
          <button
            className="bg-white text-black rounded-xl w-auto p-3 m-2"
            onClick={downloadRealStates}
          >
            Descargar listado de propiedades
          </button>
        </div>
      </div>
      <div id="last-users" className="mt-5">
        <h1 className="font-bold py-4 uppercase">
          Crear / Eliminar propiedades
        </h1>
        <div id="stats" className="flex flex-wrap">
          <Link key={"/realestate"} href={"/realestate"}>
            <button className="bg-white text-black rounded-xl w-auto px-4 py-3 m-2">
              Crear Propiedad
            </button>
          </Link>
          <button className="bg-red-600 text-black rounded-xl w-auto p-3 m-2">
            Eliminar Propiedad
          </button>
        </div>
      </div>
    </>
  );
}
