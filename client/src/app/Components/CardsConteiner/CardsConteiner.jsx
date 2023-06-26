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

  const itemsPerPage = 12;
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
            Image={prop.photos[0]}
          />
        ))}

        {/* Paginación */}
        <div className={style.pagination}>
          {/* Botón de retroceso */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={style.paginationbutton}
          >
            Retroceder
          </button>

          {/* Número de página actual */}
          <span className={style.pageNumber}>{currentPage}</span>

          {/* Botón de avance */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(allProps.length / itemsPerPage)}
            className={style.paginationButton}
          >
            Avanzar
          </button>
        </div>
      </div>
    </>
  );
};

export default CardsConteiner;
