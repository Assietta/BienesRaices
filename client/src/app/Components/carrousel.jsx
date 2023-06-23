"use client"
// import React from 'react';


import Image from 'next/image';


import { useState, useEffect, useRef } from 'react';

const Carousel = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const carouselRef = useRef(null);


  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === images.length - 1 ? 0 : prevPage + 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? images.length - 1 : prevPage - 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      setImageHeight(carouselRef.current.offsetWidth * 0.4); // Ajusta el 0.6 según tus necesidades
    }
  }, []);

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={goToPreviousPage}>
        <Image src="https://i.ibb.co/hc1CZ3D/slider-previous.png" alt="slider-previous" border="0" width={50} height={50}/>
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 "
        onClick={goToNextPage}
      >
        <Image src="https://i.ibb.co/VD3Kc4v/slider-next.png" alt="slider-previous" border="0" width={50} height={50}/>
      </button>

      <div
        ref={carouselRef}
        className="flex items-center justify-center "
        style={{ height: imageHeight }}
      >
        <Image src={images[currentPage]} alt="Carousel Image" className="w-full h-full object-cover transition-opacity duration-500" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Carousel;