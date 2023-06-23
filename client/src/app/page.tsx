import "./globals.css"
import Image from 'next/image'
import Carousel from "./Components/carrousel"



export default function Home() {
  const images = [
    'https://st.depositphotos.com/1041088/1389/i/600/depositphotos_13894671-stock-photo-american-beige-luxury-large-house.jpg',
    'https://i.blogs.es/c68014/casa-3d/840_560.jpeg',
    ,
    // Agrega más imágenes según sea necesario
  ];
  
  return (
    <div>
      <h1>esto es el home</h1>
      <Carousel images={images} />
      
    </div>
    
  )
}
