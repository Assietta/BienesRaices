import { useState } from "react";
const DashboardOrders = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const {
    id,
    paymentId,
    address,
    monto,
    username,
    email,
    status,
    acreditacion,
    date,
  } = props;

  const formatAmount = (monto) => {
    const amount = parseFloat(monto);
    return amount.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div id="last-users">
      <div className="bg-black/60 to-white/5 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">${formatAmount(monto)}</p>
            <p className="text-gray-500 font-medium">{username}</p>
            <p className="text-gray-500 text-sm">{formatDate(date)}</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a
            href="#"
            className="inline-flex space-x-2 items-center text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>

            <button
              onClick={handleModalToggle}
              className="block text-white bg-gray-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Más info
            </button>

            {isModalOpen && (
              <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {address}
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleModalClose}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-6 space-y-6">
                      <p className="leading-relaxed text-black dark:text-gray-400">
                        ID de reserva: {id}
                        <br></br>
                        ID de MP: {paymentId} <br></br>
                        Dirección: {address} <br></br>
                        Pago: ${monto} <br></br>
                        Usuario: {username} <br></br>
                        E-mail: {email} <br></br>
                        Estado de reserva: {status} <br></br>
                        Estado de acreditación: {acreditacion} <br></br>
                        Fecha de reserva: {date} <br></br>
                      </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        onClick={handleModalClose}
                        type="button"
                        className="text-gray-500 bg-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrders;
