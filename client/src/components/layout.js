import styles from "./layout.module.css";
import Banner from "./banner.js";
import MenuBar from "./menu-bar";

const tempMenuData = {
  menus: [
    {
      title: "Books",
      mainLink: "https://privateerpress.com",
      menuItems: [
        {
          text: "I Like Monsters (Except My Teacher)",
          target: "target.com",
        },
        {
          text: "I Like Monsters Book 2 (title TBD)",
          target: "steampowered.com",
        },
      ],
    },
    {
      title: "About Me",
      mainLink: "https://privateerpress.com",
      menuItems: [
        {
          text: "placeholder",
          target: "placeholder",
        },
      ],
    },
    {
      title: "Other Projects",
      mainLink: "https://privateerpress.com",
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

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className="pageHeader">
        <Banner />
        <MenuBar menus={tempMenuData} />
      </div>
      {children}
    </div>
  );
}
