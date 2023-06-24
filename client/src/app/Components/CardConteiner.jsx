"use client";
import React from 'react';
import { useSelector } from 'react-redux';

import Card from './Card'


function Cardcontainer() {
  const allProps = useSelector((state) => state.allProps);

  return (
    <div className="flex justify-center">
      <div>
      {/* {allProps.map(({ id, address, bathroom_amount, operations,parking_lot_amount, photos, real_address,room_amount, suite_amount,total_surface, type}) => (
            <Card
            key={id}
            id={id}
            address={address}
            real_address={real_address}
            operations={operations}
            photos={photos}
            type={type}
            parking_lot_amount={parking_lot_amount}
            bathroom_amount={bathroom_amount}
            suite_amount={suite_amount}
            room_amount={room_amount}
            total_surface= {total_surface}
            />
         ))
      } */}
   </div>
    </div>
  );
}

export default Cardcontainer;
