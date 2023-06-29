import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Card = (props) => {
  const {
    id,
    address,
	description,
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
 
			
        <div class="flex flex-col  m-1 w-full ">

	        <div class="relative flex flex-col md:flex-row w-full rounded-xl shadow-lg max-w-xs md:max-w-6xl mx-auto bg-green-500 whitespace-nowrap overflow-hidden overflow-ellipsis" >
		        <div class="w-full h-full grid object-cover" style={{maxWidth: '100%'}} >
			        <img src={Image}  alt="tailwind logo"  style={{ maxHeight: 240, objectFit: 'contain', objectPosition: 'center'}} />
                 </div>
			    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				    <div class="flex justify-between item-center">
					    <p class="text-gray-500 font-medium hidden md:block">Vacations</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-gray-600 font-bold text-sm ml-1">
							4.96
							<span class="text-gray-500 font-normal">(76 reviews)</span>
						</p>
					</div>
					<div class="">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						Superhost</div>
				    </div>
				    <h3 class="font-black text-gray-800 md:text-3xl text-xl">{address}</h3>
				    <p class="md:text-lg text-gray-500 text-base">{description}</p>
				    <p class="text-xl font-black text-gray-800">
					    $110
					    <span class="font-normal text-gray-600 text-base">/night</span>
				    </p>
			    </div>
	        </div>
        </div>
    </>
  );
};

export default Card;
