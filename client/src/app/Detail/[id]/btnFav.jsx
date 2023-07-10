"use client"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function BtnFav(props) {
  const { id } = props;
  const session = useSession();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (session && session.data && session.data.user && session.data.user.favorites && session.data.user.favorites.includes(id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id, session]);

  const handleToggleFavorite = async () => {
    // Verificar si hay una sesión
    if (!session) {
      console.log("No session found");
      return;
    }

    // Obtener el ID del usuario
    const userId = session.data.user.id;

    try {
      // Actualizar el estado del favorito
      setIsFavorite(!isFavorite);

      let updatedFavorites = [...session.data.user.favorites];

      if (isFavorite) {
        // Si el ID ya está en favoritos, lo eliminamos del array
        updatedFavorites = updatedFavorites.filter((favId) => favId !== id);
      } else {
        // Si el ID no está en favoritos, lo agregamos al array
        updatedFavorites.push(id);
      }

      await axios.put(`https://bienesraices-production-9eb3.up.railway.app/users/${userId}`, {
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