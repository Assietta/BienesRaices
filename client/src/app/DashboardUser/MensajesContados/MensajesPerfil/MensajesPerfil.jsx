// import styles from "./DashboardUser.module.css";
import Link from "next/link";
import Image from "next/image";

const MensajesPerfil = (props) => {
  const { id, provider, username, email, image, rol } = props;

  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-2 font-bold">
        <div className="inline-flex space-x-3 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" src="" alt="">
              {image}
            </Image>
          </span>
          <span>{username}</span>
        </div>
      </td>
      <td className="py-3 px-2">{email}</td>
      <td className="py-3 px-2">{rol}</td>
    </tr>
  );
};

export default MensajesPerfil;
