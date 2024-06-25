import Menu from "./menu";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import menuData from "../../data/MenuData";

// menus object:
// {
//     menus: [
//         {menu object taken in by menu.js}
//     ]
// }

export default function MobileMenuBar({ hamburgerOpen, toggleHamburger }) {
  // const [navClass, setNavClass] = useState("nonHomeNavMobile");

  // const router = useRouter();
  // const { pathname } = router;

  // useEffect(() => {
  //   if (pathname === "/") {
  //     setNavClass("nonHomeNavMobile");
  //   } else {
  //     setNavClass("nonHomeNavMobile");
  //   }
  // }, []);

  let menus = menuData.menus;

  return (
    <nav className={`mobileNav ${hamburgerOpen ? "visible" : "hidden"}`}>
      <ul>
        {menus.map((menu) => {
          let content = "";
          if (menu.menuItems.length > 0) {
            content = (
              <ul>
                {menu.menuItems.map((item, index) => {
                  return (
                    <li key={item.text}>
                      <Link href={item.target} onClick={toggleHamburger}>
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          }
          return (
            <li key={menu.title}>
              <Link href={menu.mainLink} onClick={toggleHamburger}>
                {menu.title}
              </Link>
              {content}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
