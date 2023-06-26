'use client';
import Image from 'next/image';
import Carousel from './Components/carrousel';
import CardConteiner from './Components/CardsConteiner/CardsConteiner';
import { Provider } from 'react-redux';
import store from '../redux/store';
import axios from "axios"

export default function Home() {
  const images = [
    'https://st.depositphotos.com/1041088/1389/i/600/depositphotos_13894671-stock-photo-american-beige-luxury-large-house.jpg',
    'https://i.blogs.es/c68014/casa-3d/840_560.jpeg',
    // Agrega más imágenes según sea necesario
    ,
  ];

  return (
    <div>
      <Provider store={store}>
        <Carousel images={images} />
        <CardConteiner />
      </Provider>
    </div>
  );
}
