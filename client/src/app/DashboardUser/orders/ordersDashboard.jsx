"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardOrders from "./DashboardOrders";

export default function OrdersDashboard() {
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

  return (
    <div id="last-users">
      <h1 className="font-bold py-4 uppercase">Reservas</h1>
      <div
        id="stats"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
  );
}
