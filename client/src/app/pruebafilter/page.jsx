"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import FilterCardContainer from "./FilterCardContainer";

export default function FilterComponent() {
  const filterOperation = [
    {
      id: "Tipo de operacion",
      name: "Tipo de operacion",
      options: [
        { value: "Venta", label: "Venta", checked: false },
        { value: "Alquiler", label: "Alquiler", checked: false },
      ],
    },
  ];
  const filtersProps = [
    {
      id: "Tipo de propiedad",
      name: "Tipo de propiedad",
      options: [
        { value: "Casa", label: "Casa", checked: false },
        { value: "Departamento", label: "Departamento", checked: false },
        { value: "Oficina", label: "Oficina", checked: false },
      ],
    },
  ];
  // const filterPrecio = [
  //   {
  //     id: "Precio",
  //     name: "Precio",
  //     options: [
  //       { value: "ARS", label: "ARS", checked: false },
  //       { value: "UDS", label: "USD", checked: false },
  //     ],
  //   },
  // ];
  const filterLocation = [
    {
      id: "ubicacion",
      name: "Ubicacion",
      options: [
        { value: "Capital Federal", label: "Capital Federal", checked: false },
        {
          value: "G.B.A. Zona Norte",
          label: "G.B.A. Zona Norte",
          checked: false,
        },
      ],
    },
  ];
  const filterAmbientes = [
    {
      id: "Cantidad de Ambientes",
      name: "Cantidad de Ambientes",
      options: [
        { value: "1", label: "1", checked: false },
        { value: "2", label: "2", checked: false },
        { value: "3", label: "3", checked: false },
        { value: "4", label: "4", checked: false },
        { value: "5+", label: "5+", checked: false },
      ],
    },
  ];
  // const filterAntiguedad = [
  //   {
  //     id: "Antiguedad",
  //     name: "Antigüedad",
  //     options: [
  //       { value: "-1", label: "A estrenar", checked: false },
  //       { value: "1", label: "1", checked: false },
  //       { value: "2", label: "2", checked: false },
  //       { value: "3", label: "3", checked: false },
  //       { value: "4", label: "4", checked: false },
  //       { value: "5+", label: "5+", checked: true },
  //     ],
  //   },
  // ];

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [viewProps, setViewProps] = useState([]);
  // const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [allProps, setProps] = useState([]);
  const [propiedad, setPropiedad] = useState(null);

  // const [currentPageFilter, setCurrentPageFilter] = useState(1);
  const [itemsPerPageFilter, setItemsPerPageFilter] = useState(4);
  const [totalItemsFilter, setTotalItemsFilter] = useState(0);

  const [filters, setFilters] = useState({
    type: "",
    operation_type: "",
    orientation: "",
    currency: "",
    minPrice: 0,
    maxPrice: 0,
    location: "",
    antiguedad: 0,
    room_amount: 0,
    suite_amount: 0,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(filters);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClick = () => {
    axios
      .post(`https://bienesraices-production-9eb3.up.railway.app/filter`, filters)
      .then((res) => {
        if (res.data && res.data.length > 1) {
          setPropiedad(res.data);
          setTotalItemsFilter(res.data.length);
          setCurrentPage(1); // Regresar a la primera página al obtener nuevos datos
          console.log(res.data);
        } else {
          // window.alert("No hay coincidencias con la busqueda realizada");
          setPropiedad([]); // Establecer en un arreglo vacío
          setTotalItemsFilter(0);
          setCurrentPage(1);
          setModalOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  const getPaginatedItems = () => {
    if (propiedad === null) {
      return [];
    }
    const startIndex = (currentPage - 1) * itemsPerPageFilter;
    const endIndex = startIndex + itemsPerPageFilter;
    return propiedad.slice(startIndex, endIndex);
  };

  const paginatedItems = getPaginatedItems();

  // //fetching de data para traer las propiedades con el paginado, guardandolas en setViewProps
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://bienesraices-production-9eb3.up.railway.app/realstate?page=${currentPage}&limit=4`
      );
      const data = response.data;
      setViewProps(data);
    } catch (error) {
      // Manejar el error de la solicitud
      console.error(error);
    }
  };

  // // funciones para mover el paginado.

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // //va a la pagina anterior a la actual
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // //va a la siguiente pagina
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const randomImageIndex = 0;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filtersProps.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="radio"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className=" border-b border-gray-200 pb-4 pt-6 bg-white fixed z-40 w-screen">
            <div className="flex items-baseline justify-around">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Buscar propiedades
              </h1>
              <button className="bg-black p-3 rounded-xl" onClick={handleClick}>
                Realizar búsqueda
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-28">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}

              <form className="hidden lg:block">
                {/* <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filterOperation.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  onChange={handleChange}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="operation_type"
                                  value={section.options.value}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {filtersProps.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="type"
                                  value={section.options.value}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {/* {filterPrecio.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="currency"
                                  value={section.options.value}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
                {filterLocation.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="location"
                                  value={section.options.value}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {filterAmbientes.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="room_amount"
                                  value={section.options.value}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {/* {filterAntiguedad.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  name="antiguedad"
                                  value={section.options.value}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="w-full bg-white text-black">
                  <div className="flex-1">
                    {paginatedItems?.length >= 1
                      ? paginatedItems.map((prop) => (
                          <FilterCardContainer
                            key={prop.id}
                            id={prop.id}
                            address={prop.address}
                            bathrooms={prop.bathroom_amount}
                            Imagep={prop.photos[randomImageIndex]}
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
                          />
                        ))
                      : viewProps.map((prop) => (
                          <FilterCardContainer
                            key={prop.id}
                            id={prop.id}
                            address={prop.address}
                            bathrooms={prop.bathroom_amount}
                            Imagep={prop.photos[randomImageIndex]}
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
                          />
                        ))}
                  </div>

                  {modalOpen && (
                    <div
                      id="defaultModal"
                      tabIndex="-1"
                      aria-hidden="true"
                      className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center"
                    >
                      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Alert
                          </h3>
                          <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                            onClick={() => setModalOpen(false)}
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-9.293a1 1 0 00-1.414 0L5 11.586 1.707 8.293A1 1 0 10.293 9.707L4.586 14l-3.293 3.293a1 1 0 101.414 1.414L5 16.414l3.293 3.293a1 1 0 101.414-1.414L6.414 15l3.293-3.293a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mb-6">
                          <h2>
                            No hay coincidencias con la búsqueda realizada
                          </h2>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="text-gray-500 bg-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5"
                            onClick={() => setModalOpen(false)}
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex justify-center item-center m-4">
                      <li className="list-none">
                        <button
                          onClick={goToPreviousPage}
                          disabled={currentPage === 1}
                          className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-gray-300`}
                        >
                          <svg
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>

                      <li className="list-none px-5 mt-1">
                        <button>{currentPage}</button>
                      </li>

                      <li className="list-none">
                        <button
                          onClick={goToNextPage}
                          disabled={
                            currentPage ===
                            Math.ceil(allProps.length / itemsPerPageFilter)
                          }
                          className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-gray-300`}
                        >
                          <svg
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
