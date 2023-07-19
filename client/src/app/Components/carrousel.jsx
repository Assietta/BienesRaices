// import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./carrousel.module.css";

export default function Carrousel() {
  return (
    <Carousel className={`max-h-screen overflow-hidden ${styles.bgn}`}>
      <div className="relative  w-full ">
        <img
          src="https://i.ibb.co/DLmNsgx/bgn-home-01.jpg"
          alt="image 1"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 grid h-screen w-screen place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            {/* <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Su Socio de Confianza
            </Typography> */}
            <Image
              className={`hidden h-40 mx-auto w-auto sm:block md:block lg:block ${styles.logo}`}
              src="https://i.ibb.co/ccTJQjw/logo-png-white-cut.png"
              alt="Your Company"
              width={1000}
              height={1000}
            />
            <Typography variant="h3" color="white" className="mt-10 text-2xl">
              Un servicio confiable, transparente e integral
            </Typography>
            {/* <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div> */}
          </div>
        </div>
      </div>
      <div className="relative inset-0 grid h-screen w-screen place-items-center bg-black/75">
        <img
          src="https://i.ibb.co/dgTs9jL/bgn02.jpg"
          alt="image 1"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Su Aliado para Comprar y Alquilar Propiedades de Ensueño
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Su satisfacción es nuestro mayor compromiso.
            </Typography>
            {/* <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div> */}
          </div>
        </div>
      </div>
      <div className="relative inset-0 grid h-screen w-screen place-items-center bg-black/75">
        <img
          src="https://i.ibb.co/mq4G1NV/bgn03.jpg"
          alt="image 1"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              La Clave para una Experiencia Inmobiliaria Exitosa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Valoramos la comunicación transparente como pilar fundamental para
              una experiencia inmobiliaria satisfactoria.
            </Typography>
            {/* <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
