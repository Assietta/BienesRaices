
import styles from './Card.module.css';
import Link from 'next/link';

const Card = (props) => {
  const { id, nombre, Imagendelabandera, continente } = props;
  return (
    <>
      <Link className={styles.navlink} to={`/countries/${id}`}>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src={Imagendelabandera}
            alt={`bandera de ${nombre}`}
          />
          <h2 className={styles.cardName}>{nombre}</h2>
          <h3 className={styles.cardContinent}>{continente}</h3>
        </div>
      </Link>
    </>
  );
};

export default Card;
