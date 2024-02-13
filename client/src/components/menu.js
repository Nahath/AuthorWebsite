import Link from "next/link";
import { useState } from "react";

export default function Menu({ menuData }) {
  let location = "";
  if (typeof window !== "undefined") {
    location = window.location.pathname;
  }

  let content = null;
  let className = "dropdown-list";
  if (location !== "/") {
    className += " non-home-dropdown";
  }

  if (menuData.menuItems.length > 0) {
    content = (
      <div>
        <ul className={className}>
          {menuData.menuItems.map((item, index) => {
            return (
              <li className="dropdown-menu-item" key={index}>
                <Link href={item.target}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className="dropdown-menu">
      <Link href={menuData.mainLink} className="menuHeader">
        {menuData.title}
      </Link>
      {content}
    </div>
  );
}

// menuData should look like this example object
