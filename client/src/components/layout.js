import styles from "./layout.module.css";
import Banner from "./banner.js";
import MenuBar from "./menu-bar";
import MenuBarWrapper from "./menu-bar-wrapper";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <MenuBarWrapper />
      {children}
    </div>
  );
}
