import Menu from "./menu";
import React from "react";
import { useRouter } from "next/router";
import menuData from "../../data/MenuData";

export default function MenuBar() {
  const { pathname } = useRouter();
  const navClass = pathname === "/" ? "homeNav" : "nonHomeNav";
  let menus = menuData.menus;

  return (
    <nav className={`${navClass} desktopNav`}>
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
