"use client";
import { useSession } from "next-auth/react";
import axios from "axios";

export default async function BtnReservar(props) {
  const { id } = props;
  const session = useSession();
  const handleReservarClick = async () => {
    // En caso de que no haya una sesión
    if (!session) {
      console.log("No session found");
      return;
    }

    // Si hay una sesión, puedes obtener el id del usuario
    const userId = session.data.user.id;

    try {
      const response = await axios.post(
        `http://localhost:3001/createOrder/${id}`,
        { userId: userId }
      );

      const preferenceId = response.data;
      const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
      window.open(redirectUrl, "_blank");
    } catch (error) {
      console.error(error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={handleReservarClick}
    >
      Reservar
    </button>
  );
}
