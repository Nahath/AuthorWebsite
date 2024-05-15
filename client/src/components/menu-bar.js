import Menu from "./menu";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import menuData from "../../data/MenuData";

// menus object:
// {
//     menus: [
//         {menu object taken in by menu.js}
//     ]
// }

export default function MenuBar() {
  const [navClass, setNavClass] = useState("nonHomeNav");

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setNavClass("homeNav");
    } else {
      setNavClass("nonHomeNav");
    }
  }, []);

  let menus = menuData.menus;

  return (
    <nav className={navClass + " desktopNav"}>
      <ul className="navbar">
        {menus.map((menu) => {
          return (
            <li className="menu" key={menu.title}>
              <Menu menuData={menu} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
