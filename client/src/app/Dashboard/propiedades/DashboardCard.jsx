import styles from "./DashboardCard.module.css";
import Link from "next/link";
import Image from "next/image";

const DashboardCard = (props) => {
  const {
    id,
    address,
    bathrooms,
    Image,
    suite_amount,
    room_amount,
    parking_lot_amount,
    bathroom_amount,
    real_address,
    operation_type,
    total_surface,
    type,
    price,
    currency,
  } = props;
  const formattedPrice = price?.toLocaleString();

  // class= "transition-transform transform hover:-translate-y-2"
  return (
    <>
      <div>
        <Link
          key={`/Detail/${id}`}
          href={`/Detail/${id}`}
          className={styles.card}
        >
          {Image && (
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                className={styles.cardImg}
                src={Image}
                width={500}
                height={300}
                alt="Property"
              />
              <div
                className="flex bg-white px-4 py-1 space-x-5 rounded-lg shadow"
                style={{
                  position: "absolute",
                  bottom: "0",
                  marginBottom: "10px",
                  zIndex: "1",
                }}
              ></div>
              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                {operation_type}
              </span>
            </div>
          )}
          <div className="mt-4 p-2">
            <h2
              className="font-medium text-base md:text-lg text-gray-300 line-clamp-1 w-52"
              title="New York"
            >
              {address}
            </h2>
            <p
              className="mt-2 text-sm text-gray-300 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              {real_address}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2">
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300">
              <svg
                className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
              </svg>
              <span className="mt-2 xl:mt-0">{type}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300">
              <svg
                className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
              </svg>
              <span className="mt-2 xl:mt-0">{total_surface}m2.</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300">
              <svg
                className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
              </svg>
              <span className="mt-2 xl:mt-0">
                ${formattedPrice} {currency}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DashboardCard;
