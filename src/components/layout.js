import styles from "./layout.module.css";
import Banner from "./banner.js";
import MenuBar from "./menu-bar";
import MenuBarWrapper from "./menu-bar-wrapper";
import Footer from "./footer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MobileMenuBar from "./mobile-menu-bar.js";
import Hamburger from "./hamburger.js";

export default function Layout({ children }) {
  const [atHome, setAtHome] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setAtHome(false);
    } else {
      setAtHome(true);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      {/* <Hamburger />
      {atHome && screenWidth < 801 && <Hamburger />} */}
      <MenuBarWrapper />
      {children}
      <Footer />
    </div>
  );
}
