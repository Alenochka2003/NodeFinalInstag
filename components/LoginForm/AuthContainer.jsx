// AuthContainer.js
import React from "react";
import styles from './LogIn.module.css';
import { Outlet } from "react-router-dom";



function AuthContainer() {

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setFadeIn(true);
  //     }, 500);
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    // <div className={`${styles.LogIn_container} ${fadeIn ? styles['fade-in'] : ''}`}>
    <div className={styles.LogIn_container}>
    
      
        <Outlet />
      
    </div>
  );
}

export default AuthContainer;
