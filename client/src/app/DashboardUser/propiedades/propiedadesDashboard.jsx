"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";

export default function PropiedadesDashboard() {
  const [viewProps, setViewProps] = useState([]);

  useEffect(() => {
    fetchDataProps();
  }, []);

  const fetchDataProps = async () => {
    try {
      const response = await axios.get(
        `https://bienesraices-production-9eb3.up.railway.app/realstate?limit=6`
      );
      const data = response.data;
      setViewProps(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  return (
    <div id="last-incomes">
      <h1 className="font-bold py-4 uppercase">Propiedades</h1>
      <div id="stats" className="flex-1 overflow-y-scroll h-60">
        {viewProps.map((prop) => (
          <DashboardCard
            key={prop.id}
            id={prop.id}
            address={prop.address}
            Imagep={prop.photos[0]}
            real_address={prop.real_address}
            operation_type={prop.operation_type}
            total_surface={prop.total_surface}
            type={prop.type}
            price={prop.price}
            currency={prop.currency}
          />
        ))}
      </div>
    </div>
  );
}
