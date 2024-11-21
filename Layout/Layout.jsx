import React from "react";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

function Layout() {

  return (
    <div className={styles.layout}>
      <Container />
      <div className={styles.content}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
