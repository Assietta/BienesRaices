import React from 'react';

const MensajesPerfil = (props) => {
  const {
    id,
    name,
    lastName,
    email,
    address,
    callTime,
    comment,
    mobile,
    phone,
  } = props;

  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-2 font-bold">
        <div className="inline-flex space-x-3 items-center">
          <span>
            {name} {lastName}
          </span>
        </div>
      </td>
      <td className="py-3 px-2">{address}</td>
      <td className="py-3 px-2">{callTime}</td>
      <td className="py-3 px-2">{comment}</td>
      <td className="py-3 px-2">{email}</td>
      <td className="py-3 px-2">{mobile}</td>
      <td className="py-3 px-2">{phone}</td>
    </tr>
  );
};

export default MensajesPerfil;
