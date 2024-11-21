import React, { useState, useEffect } from "react";
import Search from '../../components/Search/Search';
import HomePage from "../HomePage/HomePage";
import styles from './SearchPage.module.css';

function SearchPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container_search}>
      <div className={`${styles.cont_absolut} ${isVisible ? styles.fadeIn : ''}`}>
        <Search />
      </div>
      <div className="back"></div>
      <HomePage />
    </div>
  );
}

export default SearchPage;