"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ params }) {
  const [propiedad, setPropiedad] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(null);

  const { id } = params;

  useEffect(() => {
    axios.get(`http://localhost:3001/realState/${id}`).then((res) => {
      if (res.data) {
        setPropiedad(res.data);
      } else {
        window.alert("No hay propiedades con ese ID");
      }
    });
  }, [id]);

  if (!propiedad) {
    return <div>Cargando...</div>;
  }

  const handleReservarClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/createOrder/${id}`
      );
      const preferenceId = response.data;
      console.log(preferenceId);
      const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
      window.open(redirectUrl, "_blank");
    } catch (error) {
      console.error(error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };

  const product = {
    name: propiedad.address,
    price: "$ " + propiedad.operations[0].prices[0].price,
    href: "#",
    breadcrumbs: [
      { id: 1, name: propiedad.operations[0].operation_type },
      { id: 2, name: propiedad.type },
    ],
    images: [
      {
        src: propiedad.photos[0],
        alt: propiedad.photos[0],
      },
      {
        src: propiedad.photos[1],
        alt: propiedad.photos[1],
      },
      {
        src: propiedad.photos[2],
        alt: propiedad.photos[2],
      },
      {
        src: propiedad.photos[3],
        alt: propiedad.photos[3],
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description: propiedad.description,
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };

  const images = [
    propiedad.photos[0],
    propiedad.photos[1],
    propiedad.photos[2],
    propiedad.photos[3],
    propiedad.photos[4],
    propiedad.photos[5],
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeImage = (n) => {
    let newIndex = currentIndex + n;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const mapContainerStyle = {
    marginTop: "50px",
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: parseFloat(propiedad.geo_lat),
    lng: parseFloat(propiedad.geo_long),
  };

  const handleMapLoad = (map) => {
    setMarkerPosition(center);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="container mx-auto px-2 py-2 lg:px-32 lg:pt-12">
          <div className="flex flex-wrap md:-m-2">
            {images.map((image, index) => (
              <div className="w-1/3 p-1 md:p-2" key={index}>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                  src={image}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>

          {modalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <span className={styles.close} onClick={closeModal}>
                  &times;
                </span>
                <img
                  className={styles.modalContent}
                  src={images[currentIndex]}
                  alt="modal"
                />
                <a className={styles.prev} onClick={() => changeImage(-1)}>
                  &#10094;
                </a>
                <a className={styles.next} onClick={() => changeImage(1)}>
                  &#10095;
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            <div>
              <div className="pt-5 px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Información adicional
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Estado de la propiedad: {propiedad.property_condition}
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Superficie cubierta
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {propiedad.roofed_surface} m²
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Superficie Total
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {propiedad.surface} m²
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Ambientes
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {propiedad.room_amount}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Orientación
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {propiedad.orientation}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Antigüedad
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {propiedad.age} años
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleReservarClick}
            >
              Reservar
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyDSHb1gBxjiShwN6LVC_bBnxt9E60TwvmI">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                onLoad={handleMapLoad}
              >
                <Marker position={markerPosition} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}
