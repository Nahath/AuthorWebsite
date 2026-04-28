import styles from "./layout.module.css";
import MenuBarWrapper from "./menu-bar-wrapper";
import Footer from "./footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <MenuBarWrapper />
      {children}
      <Footer />
    </div>
  );
}
