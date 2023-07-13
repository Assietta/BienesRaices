'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import FavCard from './FavCard';

export default function FavConteiner() {
  const [fav, setFav] = useState([]);
  const session = useSession();
  const id = session?.data?.user?.id;

  useEffect(() => {
    fetchFav(id);
  }, []);

  const fetchFav = async (id) => {
    try {
      const response = await axios.get(`https://bienesraices-production-9eb3.up.railway.app/users/${id}`);
      const listFav = response.data.favorites;
      setFav(listFav);
      console.log(listFav, 'esto es list fav');
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  console.log(id);

  return (
    <div id="last-incomes">
      <h1 className="font-bold py-4 uppercase">Favoritos</h1>
      <div id="stats" className="flex-1 overflow-y-scroll h-60">
        {fav?.map((prop) => (
          <FavCard
            key={prop.id}
            id={prop.id}
            address={prop?.address}
            Imagep={prop?.photo}
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
