'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ConteinerF.module.css';
import CardF from './CardF'
import {
    getAllProperties,
    orderByOperation,
    orderByOrientation,
    orderByFloor,
    OrderByPrice
  } from '../../../redux/actions';


export default function ContainerF() {
    const propsGlobal = useSelector((state) => state.allProps);
    const filterProps = useSelector((state) => state.allPropsCopy);
  
   
  
  
  
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

      const randomImageIndex = Math.floor(Math.random() * 5);
    return (
        <div  className='flex flex-col  m-1 bg-green'>
          <div>
            <div className='flex flex-col  m-1 bg-green'>
				      holaaaa
			      </div>
          </div>
        
          <div className='flex flex-row  m-1 bg-green'>
            <div className='flex flex-col  m-1 bg-green bg-white'>
				    holaaaaa
			      </div>
            <div className='bg-white'>
        {/* Card */}
        {viewProps.map((prop) => (
          
          <CardF
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
            operation_type={prop.operations[0]?.operation_type}
            total_surface={prop.total_surface}
            type={prop.type}
            price={prop.operations[0]?.prices[0]?.price}
            currency={prop.operations[0]?.prices[0]?.currency}
            description={prop.description}
            
          />
        ))}

          {/* Paginación */}
<div >
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
            </div>
          </div>
       
        </div>
    );
  }