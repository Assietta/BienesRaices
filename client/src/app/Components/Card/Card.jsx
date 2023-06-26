import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
  const { id, address, bathrooms, Image } = props;
  return (
    <>
      <div className={styles.card}>
        {Image && (
          <img
            className={styles.cardImg}
            src={Image}
            width={500}
            height={300}
            alt="Property"
          />
        )}
        <h2 className={styles.cardName}>{address}</h2>
        <h3 className={styles.cardContinent}>{bathrooms}</h3>
      </div>
    </>
  );
};

export default Card;
