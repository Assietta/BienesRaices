'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ConteinerF.module.css';
import CardF from './CardF'
import Card from "../../Components/Card/Card";
import {
    getAllProperties,
    orderByOperation,
    orderByOrientation,
    orderByFloor,
    OrderByPrice
  } from '../../../redux/actions';
import { SearchBar } from '@/app/Components/SearchBar/SearchBar';


export default function ContainerF() {
    const propsGlobal = useSelector((state) => state.allProps);
    const filterProps = useSelector((state) => state.allPropsCopy);
  
    const tipe1 = ["Agua", "Corriente", "Cloaca", "Gas", "Natural", "Electricidad", "Pavimento"];
    const tipe2 = ["Balcón", "Baulera", "Cocina", "Comedor", "Comedor diario", "Dependencia", "Suite", "Oficina", "Hall", "Lavadero", "Living", "Living-comedor", "Patio", "Toilette", "Vestidor", "Escritorio"];
    const tipe3 = ["Aire Acondicionado", "individual", "Calefacción", "Hidromasaje", "Apto mascotas", "Cochera subterránea", "Luminoso", "Lavadero", "Calefacción individual"];
  
  
  
    const itemsPerPage = 9;
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
        <div className='flex flex-col bg-gray text-center '> 
            <div className='flex justify-center p-4'> 
              <select  class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden>Propiedad</option>
                <option value="US">Casa</option>
                <option value="CA">Departamento</option>
                <option value="FR">Francia</option>
              </select>

              <select  class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden>Operacion</option>
                <option value="US">Venta</option>
                <option value="CA">Alquiler</option>
                <option value="CA">Alquiler Temporal</option>
              </select>

              <select  class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden>Orientacion</option>
                <option value="US">Frente</option>
                <option value="CA">Norte</option>
                <option value="CA">Sur</option>
              </select>

              <SearchBar/>
              
              <div className='flex'>
              <select  class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden>Moneda</option>
                <option value="US">ARS</option>
                <option value="CA">USD</option>
              </select>

              <select  className='text-black'>
                <option hidden>Minimo</option>
                <option value="US">0</option>
                <option value="CA">10.000</option>
                <option value="CA">100.000</option>
                <option value="CA">500.000</option>
                <option value="CA">1.000.000</option>
                <option value="CA">5.000.000</option>
                <option value="CA">10.000.000</option>
                <option value="CA">50.000.000</option>
                <option value="CA">100.000.000</option>
                <option value="CA">250.000.000</option>
                <option value="CA">500.000.000</option>
              </select>
              <select  className='text-black'>
                <option hidden>Maximo</option>
                <option value="CA">500.000.000</option>
                <option value="CA">250.000.000</option>
                <option value="CA">100.000.000</option>
                <option value="CA">50.000.000</option>
                <option value="CA">10.000.000</option>
                <option value="CA">5.000.000</option>
                <option value="CA">1.000.000</option>
                <option value="CA">500.000</option>
                <option value="CA">100.000</option>
                <option value="CA">10.000</option>
                <option value="US">0</option>
              </select>
              </div>
              
            </div>


            <div className='flex flex-row'>

              <div className='w-1/3 bg-gray-500'>
                <div class=" px-4 py-6">

                  <h3 class="bg-white text-black">
                      Servicios
                  </h3>

                  <div className='grid grid-cols-3 justify-center'>
                  {tipe1.map((services) => (
                      <label key={services} className={style.checkboxes}>
                        <input
                          type="checkbox"
                          name="ambient"
                          value={services}
                        />
                        <span className={style.checkboxText}>
                          {services.charAt(0).toUpperCase() + services.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>

                  
                </div>

                <div class=" px-4 py-6">

                  <h3 class="bg-white text-black">
                      Ambientes
                  </h3>
                  
                  <div className='grid grid-cols-3 justify-center'>
                  {tipe2.map((ambient) => (
                      <label key={ambient} className={style.checkboxes}>
                        <input
                          type="checkbox"
                          name="ambient"
                          value={ambient}
                        />
                        <span className={style.checkboxText}>
                          {ambient.charAt(0).toUpperCase() + ambient.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>

                </div>

                <div class=" px-4 py-6">

                  <h3 class="bg-white text-black">
                      Adicionales
                  </h3>
                  
                  <div className='grid grid-cols-3 justify-center'>
                  {tipe3.map((addons) => (
                      <label key={addons} className={style.checkboxes}>
                        <input
                          type="checkbox"
                          name="ambient"
                          value={addons}
                        />
                        <span className={style.checkboxText}>
                          {addons.charAt(0).toUpperCase() + addons.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>

                </div>

              </div>



              <div className='w-full bg-white text-black'>
                <div className='grid grid-cols-3 '>
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
                      description={prop.description}
                    />))}
                </div>

                <div className={style.pagination}> 
                  <div className='flex justify-center item-center m-4'>
                    <li className={style.il}>
                       <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100 `}
                      >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                      </button>
                    </li>

                    <li className={style.il}>
                       <button>
                         {currentPage}
                       </button>
                    </li>

                    <li className={style.il}>
                        <button
                        onClick={goToNextPage}
                        disabled={currentPage === Math.ceil(allProps.length / itemsPerPage)}
                        className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-r-lg focus:shadow-outline" `}
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
        </div>
    );
  }