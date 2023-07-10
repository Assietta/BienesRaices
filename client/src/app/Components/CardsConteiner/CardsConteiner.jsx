import React, { useEffect, useState } from "react";
import style from "./CardsConteiner.module.css";
import Card from "../Card/Card";
import axios from 'axios';

const CardsConteiner = () => {
  const [viewProps, setViewProps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/realstate?page=${currentPage}&limit=5`);
      const data = response.data;
      console.log(data);
      setViewProps(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };

  const randomImageIndex = Math.floor(Math.random() * 5);

  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const handlePreviousPage = () => {
    console.log(currentPage);
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1)
    }
  };

  return (
    <div>
      <h1 className={style.title}>Propiedades Destacadas</h1>
      <div className={style.container}>
        {viewProps.map((prop) => (
          <Card
            key={prop.id}
            id={prop.id}
            address={prop.address}
            bathrooms={prop.bathroom_amount}
            Image={prop.photos[randomImageIndex]}
            suite_amount={prop.suite_amount}
            room_amount={prop.room_amount}
            parking_lot_amount={prop.parking_lot_amount}
            bathroom_amount={prop.bathroom_amount}
            real_address={prop.real_address}
            operation_type={prop.operation_type}
            total_surface={prop.total_surface}
            type={prop.type}
            price={prop.price}
            currency={prop.currency}
          />
        ))}
      </div>
      <div className={style.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default CardsConteiner;
