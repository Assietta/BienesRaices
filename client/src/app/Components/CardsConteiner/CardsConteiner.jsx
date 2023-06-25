'use client';
import React, { useEffect, useState } from 'react';
import style from './CardsConteiner.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../../redux/actions';

const CardsConteiner = () => {
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
    <>
      <div className={style.filtersContainer}>
        {/* <div className={style.searchBar}>
          <SearchBar searchCountry={searchCountry} />
        </div> */}
        <div className={style.filters}>
          <select className={style.selects}>
            <option value="" hidden>
              Continent
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select className={style.selects}>
            <option value="" hidden>
              Order
            </option>
            <option value="Ascendente">A - Z</option>
            <option value="Descendente">Z - A</option>
          </select>

          <select className={style.selects}>
            <option value="" hidden>
              Population
            </option>
            <option value="Ascendente">More population</option>
            <option value="Descendente">Less population</option>
          </select>

          <select className={style.selects} name="activity">
            <option value="" hidden>
              Activity
            </option>
            <option value="All">All</option>

            {/* {Array.isArray(newAcitivities) ? (
              newAcitivities.map((activity) => {
                return (
                  <option key={activity.id} value={activity.Nombre}>
                    {activity.Nombre}
                  </option>
                );
              })
            ) : (
              <option value="" disabled>
                Create a new activity
              </option>
            )} */}
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
