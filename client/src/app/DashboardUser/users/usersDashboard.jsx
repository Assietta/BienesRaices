"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardUser from "./DashboardUser";

export default function UsersDashboard() {
  const [viewUsers, setViewUsers] = useState([]);

  useEffect(() => {
    fetchDataUsers();
  }, []);

  const fetchDataUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/`);
      const data = response.data.users;
      setViewUsers(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  return (
    <div id="last-users">
      <h1 className="font-bold py-4 uppercase">Usuarios</h1>
      <table className="w-full whitespace-nowrap">
        <thead className="bg-black/60">
          <th className="text-left py-3 px-2 rounded-l-lg">Nombre</th>
          <th className="text-left py-3 px-2">Email</th>
          <th className="text-left py-3 px-2">Rol</th>
          <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
        </thead>
        {viewUsers.map((user) => (
          <DashboardUser
            key={user.id}
            id={user.id}
            provider={user.provider}
            // image={user.image}
            username={user.username}
            email={user.email}
            rol={user.rol}
          />
        ))}
      </table>
    </div>
  );
}
