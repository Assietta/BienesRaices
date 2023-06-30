"use client"
// import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
 



import Image from 'next/image';


import { useState, useEffect, useRef } from 'react';

 

 
    export default function Carrousel() {
      return (
        <Carousel className="rounded-xl max-h-screen overflow-hidden">
          <div className="relative  w-full ">
            <img
              src="https://i.ibb.co/TLLBYMn/agente-inmobiliario-vista-lateral-presentando-casa.jpg"
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
                  Confíe en Nosotros para su Éxito Inmobiliario: Su Socio de Confianza
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                 En nuestro equipo inmobiliario, comprendemos la importancia de su confianza al tomar decisiones sobre comprar o alquilar una propiedad.
                  Nos comprometemos a brindarle un servicio confiable, transparente e integral. Nuestro enfoque personalizado y nuestra experiencia nos permiten ser su socio de confianza en este emocionante viaje.
                 Juntos, haremos realidad su sueño inmobiliario.
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
          <div className="relative  w-full ">
            <img
              src="https://i.ibb.co/0sTGPsW/agente-mano-hogar-palma-llave-dedo.jpg"
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
                  Compromiso Inquebrantable: Su Aliado para Comprar y Alquilar Propiedades de Ensueño
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  En nuestra página inmobiliaria, entendemos la importancia del compromiso absoluto para satisfacer sus necesidades inmobiliarias. Nuestro equipo se compromete a brindarle un servicio excepcional y personalizado en la búsqueda y adquisición de su hogar ideal. Con una dedicación inquebrantable, trabajamos incansablemente para superar sus expectativas y hacer realidad sus sueños de propiedad. 
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
          <div className="relative  w-full ">
            <img
              src="https://i.ibb.co/BcFQvvW/pareja-feliz-llaves-apartamento-nuevo.jpg"
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
                  Comunicación Transparente: La Clave para una Experiencia Inmobiliaria Exitosa
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  En nuestra página de venta y alquiler de propiedades, valoramos la comunicación transparente como pilar fundamental para una experiencia inmobiliaria satisfactoria. Nos esforzamos por mantener una comunicación clara y constante, manteniéndole informado en cada paso del proceso. Nuestro equipo estará a su disposición para responder a sus preguntas y brindarle actualizaciones regulares sobre el progreso de su transacción inmobiliaria. Con una comunicación fluida, garantizamos que se sienta involucrado y seguro durante todo el proceso. Confíe en nosotros para una experiencia inmobiliaria donde la comunicación sea la clave del éxito.
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
          {/* <div className="relative h w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="relative  w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 text-center">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div> */}
        </Carousel>
      );
    }




