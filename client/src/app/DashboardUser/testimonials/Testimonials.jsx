"use client";
import axios from "axios";
import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Testimonials() {
  const [review, setReview] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const session = useSession();
  const { id } = session.data.user;
  const userId = session.data.user.id;
  const userName = session.data.user.username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/testimonials`, {
        userId: userId,
        username: userName,
        text: text,
        rating: rating,
      });
      const formReview = response.data;
      setReview(formReview);
      console.log(formReview);
      alert("review enviada");
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="font-bold py-4 uppercase">Reviews</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
          >
            Califica nuestro servicio de 1 a 5
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option disabled>Calificación</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
          >
            Dejanos un comentario
          </label>
          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
