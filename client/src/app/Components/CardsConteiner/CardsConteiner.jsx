'use client';
import React, { useEffect, useState } from 'react';
import style from './CardsConteiner.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProperties,
  orderByOperation,
  orderByOrientation,
  orderByFloor,
  OrderByPrice
} from '../../../redux/actions';

const CardsConteiner = () => {
  const propsGlobal = useSelector((state) => state.allProps);
  const filterProps = useSelector((state) => state.allPropsCopy);

 console.log(propsGlobal);



  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const [allProps, setProps] = useState([]);

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const viewProps = allProps.slice(indexOfFirstCountry, indexOfLastCountry);

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
    } else {
      setProps(propsGlobal);
    }
  }, [propsGlobal]);

  const filterByOrientation = (e) => {
    dispatch(orderByOrientation(e.target.value));

    if (e.target.value === 'All') {
      setProps([...allProps]);
    } else {
      setProps([...filterProps]);
    }
    e.target.value = '';
  };

  const filterByOperation = (e) => {
    dispatch(orderByOperation(e.target.value));

    if (e.target.value === 'All') {
      setProps([...allProps]);
    } else {
      setProps([...filterProps]);
    }
    e.target.value = '';
  };

  const filterByFloor = (e) => {
    dispatch(orderByFloor(e.target.value));
    setProps([...filterProps]);
    e.target.value = '';
  };

    const filterByPrice = (e) => {
      dispatch(OrderByPrice(e.target.value));

      if (e.target.value === 'All') {
        setProps([...allProps]);
      } else {
        setProps([...filterProps]);
      }
      e.target.value = '';
    };
 console.log(viewProps);
 const randomImageIndex = Math.floor(Math.random() * 5);
  return (
    <>
      <div className={style.filtersContainer}>
        {/* <div className={style.searchBar}>
          <SearchBar searchCountry={searchCountry} />
        </div> */}
        <div className={style.filters}>
          <select className={style.selects} onChange={filterByOrientation}>
            <option value="" hidden>
              Orientation
            </option>
            <option value="All">All</option>
            <option value="Noreste">Noreste</option>
            <option value="Noroeste">Noroeste</option>
            <option value="Este">Este</option>
            <option value="Oeste">Oeste</option>
            <option value="Sur">Sur</option>
            <option value="Suroeste">Suroeste</option>
            <option value="Sureste">Sureste</option>
          </select>

          <select className={style.selects} onChange={filterByOperation}>
            <option value="" hidden>
              Operation
            </option>
            <option value="All">All</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>

          <select className={style.selects} onChange={filterByFloor}>
            <option value="" hidden>
              Floors
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <select className={style.selects} onChange={filterByPrice}>
            <option value="" hidden>
              Price
            </option>
            <option value="All">All</option>
            <option value="150000000">150.000.000</option>
            <option value="100000000">100.000.000</option>
            <option value="50000000">50.000.000</option>
            <option value="10000000">10.000.000</option>
            <option value="1000000">1.000.000</option>
          </select>
        </div>
      </div>

      <div className={style.container}>
        {/* Card */}
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
            price={prop.operations[0]?.prices[0]?.price}
            currency={prop.operations[0]?.prices[0]?.currency}
            
          />
        ))}

          {/* Paginación */}
<div className={style.pagination}>
  {/* Botón de retroceso */}
  <li className={style.il}>
    <button
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100 ${currentPage === 1 ? 'hidden' : ''}`}
    >
      <svg
        className="w-4 h-4 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    </button>
  </li>

  {/* Número de página actual */}
 
  <li className={style.il}>
    <button className="h-10 px-5 text-white transition-colors duration-150 bg-green-600 border border-r-0 border-green-600 focus:shadow-outline">
      {currentPage}
    </button>
  </li>
 

  {/* Botón de avance */}
  <li className={style.il}>
    <button
      onClick={goToNextPage}
      disabled={currentPage === Math.ceil(allProps.length / itemsPerPage)}
      className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-green-100 ${currentPage === Math.ceil(allProps.length / itemsPerPage) ? 'hidden' : ''}`}
    >
      <svg
        className="w-4 h-4 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    </button>
  </li>
</div>



        
        <div class=" p-12 flex items-center flex-wrap">
        </div>
      </div>
    </>
  );
};

export default CardsConteiner;
