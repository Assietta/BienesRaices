'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ConteinerF.module.css';
import CardF from './CardF'


import { SearchBar } from '@/app/Components/SearchBar/SearchBar';
import axios from 'axios';

export default  function ContainerF() {
    // const propsGlobal = useSelector((state) => state.allProps);

    const [viewProps, setViewProps] = useState([]);
    
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
  
    const [allProps, setProps] = useState([]);
    const [propiedad, setPropiedad] = useState();
  

    const tipe1 = ["Agua", "Corriente", "Cloaca", "Gas", "Natural", "Electricidad", "Pavimento"];
    const tipe2 = ['Cocina', 'Living comedor', 'Balcón', 'Comedor', 'Living', 'Lavadero', 'Comedor diario', 'Escritorio', 'Oficina', 'Galería', 'Jardín', 'Toilette', 'Hall', 'Suite', 'Baulera', 'Vestidor', 'Dependencia', 'Biblioteca', 'Patio', 'Terraza'];
    const tipe3 = ['Apto profesional', 'Calefacción individual', 'Apto mascotas', 'Luminoso', 'En construcción', 'Preinstalación de A/A', 'Parrilla', 'Solarium', 'Calefacción', 'Pileta', 'SUM', 'Cochera subterránea', 'Gimnasio', 'Calefacción por radiadores', 'Aire Acondicionado individual', 'Seguridad Porteria', 'Apto crédito', 'Alarma', 'Seguridad Diurna', 'Lavadero'];


  

    const [filters, setFilters] = useState({
      type: "",
      operation_type: "",
      orientation: "",
      currency: "",
      minPrice: 0,
      maxPrice: 0,
      bathroom_amount: 0,
      parking_lot_amount: 0,
      room_amount: 0,
      suite_amount: 0
    });
    

    
 

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    };
    
    
    //fetching post para enviar los filtros seleccionados, actualizando el setPropiedades con las propiedades filtradas
  
    const handleClick = () => {
      axios
        .post("http://localhost:3001/filter", filters)
        .then((res) => {
          if (res.data) {
            setPropiedad(res.data);
          } else {
            window.alert("No hay propiedades con ese ID");
          }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    };
    
  
  
    

    
    //fetching de data para traer las propiedades con el paginado, guardandolas en setViewProps
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/realstate?page=${currentPage}&limit=9`);
        const data = response.data;
        console.log(data);
        setViewProps(data);
      } catch (error) {
          // Manejar el error de la solicitud
          console.error(error);
        }
      };
      
      // funciones para mover el paginado.

      useEffect(() => {
        fetchData();
      }, [currentPage]);
      
      //va a la pagina anterior a la actual
      
      const goToPreviousPage = () => {
          setCurrentPage((prevPage) => prevPage - 1);
        };
      
       //va a la siguiente pagina

        const goToNextPage = () => {
          setCurrentPage((prevPage) => prevPage + 1);
        };
      

      const randomImageIndex = 0
    return (
        <div className='flex flex-col bg-gray text-center '> 
            <div className='flex justify-center p-4 m-2 space-x-4'> 
            <SearchBar/>

            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="border text-sm text-black rounded-lg"
            >
              <option hidden>Propiedad</option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Oficina">Oficina</option>
            </select>

            <select
              name="operation_type"
              value={filters.operation_type}
              onChange={handleChange}
              className="border text-sm text-black rounded-lg"
            >
              <option hidden>Operación</option>
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>


              <select  
               name="orientation"
               value={filters.orientation}
               onChange={handleChange}
              class="border text-sm text-black rounded-lg">
                <option hidden>Orientacion</option>
                <option value="Frente">Frente</option>
                <option value="Contrafrente">Contrafrente</option>
              </select>

              
              
              <div className='flex space-x-4'>
              <select  
               name="currency"
               value={filters.currency}
               onChange={handleChange}
              class="border text-sm text-black rounded-lg">
                <option hidden>Moneda</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>

              <div className='flex flex-col'>
                <label htmlFor="">Minimo</label>
                <input name="minPrice" className='text-black'
               value={filters.minPrice}
               onChange={handleChange}/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="">Maximo</label>
                <input className='text-black' type="number" name="maxPrice"
               value={filters.maxPrice}
               onChange={handleChange}/>
              </div>
              
              </div>
              <button onClick={handleClick}>Realizar filtro</button>
            </div>


            <div className='flex flex-row '>

              <div className='w-1/3 bg-gray-500'>
                <div class=" px-4 py-6">




                <div className='flex flex-row m-4'>
                <label htmlFor="" className='ml-5 mr-5'>Baños</label>
                <input name="bathroom_amount" type='number' className='text-black'
               value={filters.bathroom_amount}
               onChange={handleChange}/>
              </div>

              <div className='flex flex-row m-4'>
                <label htmlFor="" className='ml-5 mr-5'>Habitaciones</label>
                <input name="room_amount" className='text-black' type='number'
               value={filters.room_amount}
               onChange={handleChange}/>
              </div>

              <div className='flex flex-row m-4'>
                <label htmlFor="" className='ml-5 mr-5'>Dormitorios</label>
                <input name="suite_amount" type='number' className='text-black'
               value={filters.suite_amount}
               onChange={handleChange}/>
              </div>

              <div className='flex flex-row m-4'>
                <label htmlFor="" className='ml-5 mr-5'>Cocheras</label>
                <input name="parking_lot_amount" type='number' className='text-black'
               value={filters.parking_lot_amount}
               onChange={handleChange}/>
              </div>


              <select  
               name="orientation"
               value={filters.orientation}
               onChange={handleChange}
              class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden>Superficie</option>
                <option value="Frente">0 a 25m2</option>
                <option value="Frente">25m2 a 50m2</option>
                <option value="Frente">50m2 a 75m2</option>
                <option value="Frente">75m2 a 100m2</option>
                <option value="Frente">100m2 a 200m2</option>
                <option value="Frente">200m2 a 500m2</option>
                <option value="Frente">mas de 500m2</option>
              </select>

              
                  <h3 class="bg-white text-black">
                      Servicios
                  </h3>

                  <div className='grid grid-cols-3 justify-center'>
                  {tipe1.map((services) => (
                      <label key={services} className={style.checkboxes}>
                        <input
                          type="checkbox"
                          name="tags"
                          value={filters.tags}
                        />
                        <span className={style.checkboxText}>
                          {services.charAt(0).toUpperCase() + services.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>

                  
                </div>
                    
                <div class=" px-4  py-6">

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



              <div className='w-full text-black'>
                <div className=' 
                    
                '>
                  {viewProps?.map((prop) => (
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