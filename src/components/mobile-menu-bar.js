import React from "react";
import Link from "next/link";
import menuData from "../../data/MenuData";

// menus object:
// {
//     menus: [
//         {menu object taken in by menu.js}
//     ]
// }

export default function MobileMenuBar({ hamburgerOpen, toggleHamburger }) {
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
