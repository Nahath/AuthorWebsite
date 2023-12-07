import Menu from "./menu";

// menus object:
// {
//     menus: [
//         {menu object taken in by menu.js}
//     ]
// }
export default function MenuBar({ menus }) {
  return (
    <nav>
      <ul className="navbar">
        {menus.menus.map((menu) => {
          return (
            <li className="menu">
              <Menu menuData={menu} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
