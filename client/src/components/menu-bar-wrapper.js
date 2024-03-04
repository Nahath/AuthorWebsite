import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuBar from "./menu-bar";
import MobileMenuBar from "./mobile-menu-bar";

export default function MenuBarWrapper() {
  const [showMenu, setShowMenu] = useState(true);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [pathname]);

  if (showMenu) {
    return (
      <>
        <MenuBar />
      </>
    );
  } else {
    return "";
  }
}
