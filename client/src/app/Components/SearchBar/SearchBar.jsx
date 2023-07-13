import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar ({ searchCountry }) {


  const handleChange = (e) => {
    searchCountry(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.inputSearch}
        placeholder="Search a country..."
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};
