import styles from "./layout.module.css";
import Banner from "./banner.js";
import MenuBar from "./menu-bar";

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

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* <div className="pageHeader"> */}
      <Banner />
      <MenuBar menus={tempMenuData} />
      {/* </div> */}
      {children}
    </div>
  );
}
