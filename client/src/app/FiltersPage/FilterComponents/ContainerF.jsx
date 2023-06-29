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
        // <div  className='flex flex-col  m-1 bg-green'>
        //   <div>
        //     <div className='flex flex-col  m-1 bg-green-500'>
				//       holaaaa
			  //     </div>
        //   </div>
        
        //   <div className='flex flex-row  m-1 bg-green'>
        //     <div className='flex flex-col  m-1  bg-white w-1/4'>
            
        //     <div class="border-t border-gray-200 px-4 py-6">
        //       <h3 class="-mx-2 -my-3 flow-root">
           
        //         <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
        //           <span class="font-medium text-gray-900">Color</span>
        //           <span class="ml-6 flex items-center">
                
        //             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //               <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        //             </svg>
              
        //             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //               <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
        //             </svg>
        //           </span>
        //         </button>
        //       </h3>
           
        //       <div class="pt-6" id="filter-section-mobile-0">
        //         <div class="space-y-6">
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">White</label>
        //           </div>
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
        //           </div>
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
        //           </div>
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
        //           </div>
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
        //           </div>
        //           <div class="flex items-center">
        //             <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        //             <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
        //           </div>
        //         </div>
        //       </div>
        //       </div>
              



			  //     </div>
        //     <div className='grid grid-cols-3 bg-green-500 '>
        //           {/* Card */}
        //         {viewProps.map((prop) => (
        //           <Card
        //             key={prop.id}
        //             id={prop.id}
        //             address={prop.address}
        //             bathrooms={prop.bathroom_amount}
        //             Image={prop.photos[randomImageIndex]}
        //             suite_amount={prop.suite_amount}
        //             room_amount={prop.room_amount}
        //             parking_lot_amount={prop.parking_lot_amount}
        //             bathroom_amount={prop.bathroom_amount}
        //             real_address={prop.real_address}
        //             operation_type={prop.operations[0]?.operation_type}
        //             total_surface={prop.total_surface}
        //             type={prop.type}
        //             price={prop.operations[0]?.prices[0]?.price}
        //             currency={prop.operations[0]?.prices[0]?.currency}
        //             description={prop.description}
        //           />
        //                 ))}

        //           {/* Paginación */}
        //       <div className='flex justify-center mt-4 bg-blue-500 w-full ml-20' >
        //           {/* Botón de retroceso */}
        //             <li className={style.il}>
        //               <button
        //                 onClick={goToPreviousPage}
        //                 disabled={currentPage === 1}
        //                 className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100 ${currentPage === 1 ? 'hidden' : ''}`}
        //               >
        //               <svg
        //                 className="w-4 h-4 fill-current"
        //                 viewBox="0 0 20 20"
        //               >
        //                 <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
        //               </svg>
        //               </button>
        //             </li>

        //           {/* Número de página actual */}
 
        //             <li className={style.il}>
        //               <button className="h-10 px-5 text-white transition-colors duration-150 bg-green-600 border border-r-0 border-green-600 focus:shadow-outline">
        //                 {currentPage}
        //               </button>
        //             </li>
 

        //           {/* Botón de avance */}
        //             <li className={style.il}>
        //               <button
        //                 onClick={goToNextPage}
        //                 disabled={currentPage === Math.ceil(allProps.length / itemsPerPage)}
        //                 className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-green-100 ${currentPage === Math.ceil(allProps.length / itemsPerPage) ? 'hidden' : ''}`}
        //               >
        //                 <svg
        //                   className="w-4 h-4 fill-current"
        //                   viewBox="0 0 20 20"
        //                 >
        //                   <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
        //                 </svg>
        //               </button>
        //            </li>
        //       </div>
        //     </div>
        //   </div>
       
        // </div>


        <div className='flex flex-col bg-green-500 text-center '> 
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

              <div className='w-1/3 bg-blue-500'> Hola 2
                <div class=" px-4 py-6">

                  <h3 class="-mx-2 -my-3 flow-root">
                      Servicios
                  </h3>

                  <div class="border-t border-gray-200 py-6">
                    <div class="flex flex-cols-2 ">
                      <div class="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">Agua Corriente</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Cloaca</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Gas Natural</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Electricidad</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Pavimento</label>
                      </div>
                    </div>
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
                      operation_type={prop.operations[0]?.operation_type}
                      total_surface={prop.total_surface}
                      type={prop.type}
                      price={prop.operations[0]?.prices[0]?.price}
                      currency={prop.operations[0]?.prices[0]?.currency}
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