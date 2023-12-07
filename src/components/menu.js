import Link from "next/link";
import { useState } from "react";

export default function Menu({ menuData }) {
  return (
    <div className="dropdown-menu">
      <Link href={menuData.mainLink} className="menuHeader">
        {menuData.title}
      </Link>
      <div>
        <ul className="dropdown-list">
          {menuData.menuItems.map((item, index) => {
            return (
              <li className="dropdown-menu-item" key={index}>
                <Link href={item.target}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// menuData should look like this example object
