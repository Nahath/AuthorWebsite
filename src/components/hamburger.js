import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Hamburger({ isOpen }) {
  const [navClass, setNavClass] = useState("nonHomeHamburger");

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setNavClass("homeHamburger");
    } else {
      setNavClass("nonHomeHamburger");
    }
  }, []);
  // const cls = "hamburger " + navClass;

  //const cls = "hamburger";
  return (
    <div className="hamburger">
      <div className={`hamburgerIntermediate${isOpen ? " showX" : ""}`}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </div>
    </div>
  );
}
