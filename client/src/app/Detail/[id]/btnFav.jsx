"use client"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function BtnFav(props) {
  const { id, address, photo, price } = props;
  const { data: session, status } = useSession();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favs, setFavs] = useState({
    id,
    address,
    photo,
    price
  })

  useEffect(() => {
    if (status === "authenticated" && session?.user?.favorites?.includes(id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id, session, status]);

  const handleToggleFavorite = async () => {
    if (status !== "authenticated") {
      console.log("No se encontró sesión");
      return;
    }

    const userId = session.user.id;

    try {
      setIsFavorite(!isFavorite);

      let updatedFavorites = Array.isArray(session.user.favorites) ? [...session.user.favorites] : [];

      if (isFavorite) {
        updatedFavorites = updatedFavorites.filter((favId) => favId.id !== id);
      } else {
        updatedFavorites.push(favs);
      }

      await axios.put(`http://localhost:3001/users/${userId}`, {
        favorites: updatedFavorites,
      });

      // Realizar cualquier otra acción necesaria después de la actualización de favoritos
    } catch (error) {
      console.error(error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <button
      type="submit"
      className={`mt-10 flex w-full items-center justify-center rounded-md border ${isFavorite ? "bg-black text-white" : "bg-white text-black"} px-8 py-3 text-base font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      onClick={handleToggleFavorite}
    >
      FAV
    </button>
  );
}
