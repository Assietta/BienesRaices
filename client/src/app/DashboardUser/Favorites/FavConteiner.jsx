"use client"
import axios from "axios"
import { useSession } from "next-auth/react";
import { useState } from "react";
import DashboardCard from "../propiedades/DashboardCard";


export default function FavConteiner () {

  const[fav, setFav] =useState([])
  const session = useSession()
  const {id} = session.data.user 

    const fetchDataProps = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/users/${id}`
          );
          const data = response.data;
          setFav(data);
          console.log(data);
        } catch (error) {
          // Manejar el error de la solicitud
          console.error(error);
        }
      };
    
      console.log(fav);

    return(
      <div id="last-incomes">
      <h1 className="font-bold py-4 uppercase">Propiedades</h1>
      <div id="stats" className="flex-1 overflow-y-scroll h-60">
        {fav.map((prop) => (
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
    )
}