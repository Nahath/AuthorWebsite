import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuBar from "./menu-bar";
import MobileMenuBar from "./mobile-menu-bar";
import Hamburger from "./hamburger";

export default function MenuBarWrapper() {
  const [showMenu, setShowMenu] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
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

  function toggleHamburger() {
    console.log("toggled Hamburger: " + hamburgerOpen);
    setHamburgerOpen(!hamburgerOpen);
  }

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/" && screenWidth > 800) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [pathname, screenWidth]);

  if (showMenu) {
    return (
      <>
        <MenuBar />
        <div onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <MobileMenuBar hamburgerOpen={hamburgerOpen} />
        {/* {hamburgerOpen && <MobileMenuBar />} */}
      </>
    );
  } else {
    return "";
  }
}
