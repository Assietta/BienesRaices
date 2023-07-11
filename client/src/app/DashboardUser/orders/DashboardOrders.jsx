const DashboardOrders = (props) => {
  const {
    key,
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
      <div class="bg-black/60 to-white/5 rounded-lg">
        <div class="flex flex-row items-center">
          <div class="text-3xl p-4">💰</div>
          <div class="p-2">
            <p class="text-xl font-bold">${formatAmount(monto)}</p>
            <p class="text-gray-500 font-medium">{username}</p>
            <p class="text-gray-500 text-sm">{formatDate(date)}</p>
          </div>
        </div>
        <div class="border-t border-white/5 p-4">
          <a href="#" class="inline-flex space-x-2 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrders;
