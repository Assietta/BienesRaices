"use client";
import axios from "axios";
import FileDownload from "js-file-download";

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
  );
}
