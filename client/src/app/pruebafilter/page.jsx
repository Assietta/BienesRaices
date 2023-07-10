"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import CardF from "../FiltersPage/FilterComponents/CardF";

export default function FilterComponent() {
  const filtersProps = [
    {
      id: "Tipo de propiedad",
      name: "Tipo de propiedad",
      options: [
        { value: "Casa", label: "Casa", checked: false },
        { value: "Departamento", label: "Departamento", checked: false },
        { value: "Oficina", label: "Oficina", checked: true },
      ],
    },
    {
      id: "Precio",
      name: "Precio",
      options: [
        { value: "ARS", label: "ARS", checked: false },
        { value: "UDS", label: "USD", checked: false },
      ],
    },
    {
      id: "ubicacion",
      name: "Ubicacion",
      options: [
        { value: "CABA", label: "CABA", checked: false },
        { value: "vicente lopez", label: "Vicente López", checked: false },
        { value: "san idisro", label: "San Isidro", checked: true },
        { value: "olivos", label: "Olivos", checked: false },
        { value: "martinez", label: "Martinez", checked: false },
      ],
    },
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
    {
      id: "Antigueda",
      name: "Antigüedad",
      options: [
        { value: "-1", label: "A estrenar", checked: false },
        { value: "1", label: "1", checked: false },
        { value: "2", label: "2", checked: false },
        { value: "3", label: "3", checked: false },
        { value: "4", label: "4", checked: false },
        { value: "5+", label: "5+", checked: true },
      ],
    },
    {
      id: "Superficie Total",
      name: "Superficie Total",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
    {
      id: "Características",
      name: "Características",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [viewProps, setViewProps] = useState([]);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [allProps, setProps] = useState([]);
  const [propiedad, setPropiedad] = useState();

  const [filters, setFilters] = useState({
    type: filtersProps[0].options[0].value,
    operation_type: "",
    orientation: "",
    currency: "",
    minPrice: 0,
    maxPrice: 0,
    bathroom_amount: 0,
    parking_lot_amount: 0,
    room_amount: 0,
    suite_amount: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(filters);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

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

  // //fetching de data para traer las propiedades con el paginado, guardandolas en setViewProps
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/realstate?page=${currentPage}&limit=9`
      );
      const data = response.data;
      console.log(viewProps);
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

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
  ];

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
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>
            <button className="bg-black" onClick={handleClick}>
              Realizar filtro
            </button>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                    <div></div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}

              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

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
                        {/* <select
                          name="type"
                          value={filters.type}
                          onChange={handleChange}
                          className="border text-sm text-black rounded-lg"
                        >
                          <option hidden>Propiedad</option>
                          <option value="Casa">Casa</option>
                          <option value="Departamento">Departamento</option>
                          <option value="Oficina">Oficina</option>
                        </select> */}
                        <Disclosure.Panel
                          className="pt-6"
                          name="type"
                          value={filters.type}
                          onChange={handleChange}
                        >
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="w-full bg-white text-black">
                  <div className="grid grid-cols-3 ">
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
                      />
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-center item-center m-4">
                      <li>
                        <button
                          onClick={goToPreviousPage}
                          disabled={currentPage === 1}
                          className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100 `}
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

                      <li>
                        <button>{currentPage}</button>
                      </li>

                      <li>
                        <button
                          onClick={goToNextPage}
                          disabled={
                            currentPage ===
                            Math.ceil(allProps.length / itemsPerPage)
                          }
                          className={`h-10 px-5 text-green-600 transition-colors duration-150 rounded-r-lg focus:shadow-outline" `}
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
