'use client'
import React, { useEffect, useState } from 'react';
// import style from './CardsConteiner.module.css';
// import SearchBar from '../SearchBar/SearchBar';
import Card from "./Card"
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions';


export default function CardContainer() {
  const propsGlobal = useSelector((state) => state.allProps);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [allProps, setProps] = useState([]);

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const viewProps = allProps.slice();
  indexOfFirstCountry, indexOfLastCountry;

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (propsGlobal.length < 1) {
      dispatch(getAllProperties());
    }
  }, []);

  console.log(propsGlobal);

  return (
    <div className="flex justify-center w-full">
      <div>
      {propsGlobal.map(({ id, address, bathroom_amount, operations,parking_lot_amount, photos, real_address,room_amount, suite_amount,total_surface, type}) => (
            <Card
            key={id}
            id={id}
            address={address}
            real_address={real_address}
            price={operations[0].prices.price}
            currency={operations[0].prices.currency}
            operations={operations.operation_type}
            photo={photos[0]}

            photos={photos}
            type={type}
            parking_lot_amount={parking_lot_amount}
            bathroom_amount={bathroom_amount}
            suite_amount={suite_amount}
            room_amount={room_amount}
            total_surface= {total_surface}
            />
         ))
      }
   </div>
    </div>
  );
}
