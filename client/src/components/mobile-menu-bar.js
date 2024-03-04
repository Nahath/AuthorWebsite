import Menu from "./menu";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// menus object:
// {
//     menus: [
//         {menu object taken in by menu.js}
//     ]
// }

const tempMenuData = {
  menus: [
    {
      title: "Home",
      mainLink: "/",
      menuItems: [],
    },
    {
      title: "Books",
      mainLink: "books",
      menuItems: [
        {
          text: "I Like Monsters (Except My Teacher)",
          target: "i-like-monsters",
        },
        {
          text: "I Like Monsters Book 2 (title TBD)",
          target: "monsters-book-2",
        },
      ],
    },
    {
      title: "Meet the Author",
      mainLink: "about-me",
      menuItems: [],
    },
    {
      title: "Book Recommendations",
      mainLink: "book-recommendations",
      menuItems: [],
    },
    {
      title: "Other Projects",
      mainLink: "other-projects",
      menuItems: [
        {
          text: "Indulgent Creativity",
          target: "https://indulgentcreativity.blogspot.com/",
        },
        {
          text: "Something Else",
          target: "steampowered.com",
        },
      ],
    },
  ],
};
export default function MobileMenuBar() {
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

  let menus = tempMenuData.menus;

  return (
    <nav className={navClass + " mobileNav"}>
      <ul>
        {menus.map((menu) => {
          let content = "";
          if (menu.menuItems.length > 0) {
            content = (
              <ul>
                {menu.menuItems.map((item, index) => {
                  return (
                    <li key={item.title}>
                      <Link href={item.target}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          }
          return (
            <li key={menu.title}>
              <Link href={menu.mainLink}>{menu.title}</Link>
              {content}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
