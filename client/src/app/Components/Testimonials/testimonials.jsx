import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const testimonioText = [
  { text: "hola soy un tesmonio", user: "juan pedro" },
  { text: "hola soy un tesmonio", user: "juan pedro" },
  { text: "hola", user: "juan pedro" },
  { text: "hola soy un tesmonio", user: "juan pedro" },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/testimonials/`);
      const data = response.data;
      setReviews(data);
      console.log(reviews);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };
  return (
    <Carousel
      className="max-h-screen overflow-hidden"
      slides={testimonioText.length}
      outline="none"
      fade={false}
    >
      {reviews.map((testimonial) => (
        <div>
          <section class="bg-black dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="max-w-screen-md mx-auto">
                <svg
                  class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <div>
                    <p class="text-2xl font-medium text-white">
                      {testimonial.text}
                    </p>
                  </div>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-white">
                      Calificación: {testimonial.rating}/5
                    </div>
                  </div>
                </figcaption>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-white">
                      {testimonial.username}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      ))}
    </Carousel>
  );
}
