"use client";
import Image from 'next/image'


import { useDispatch, useSelector } from 'react-redux';
import Carousel from "./components/carrousel"
import Cardcontainer from "./components/CardConteiner"

export default function Home() {

  

  const images = [
    'https://st.depositphotos.com/1041088/1389/i/600/depositphotos_13894671-stock-photo-american-beige-luxury-large-house.jpg',
    'https://i.blogs.es/c68014/casa-3d/840_560.jpeg',
    // Agrega más imágenes según sea necesario
  ];

  
  return (
    <div>
      <Carousel images={images} />
      <Cardcontainer  />
    </div>
  );
}




