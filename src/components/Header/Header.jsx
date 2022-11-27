import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite";

const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <ul className={styles.list__container}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/people/?page=1">People</NavLink>
          </li>
        </ul>
        <Favorite></Favorite>
      </nav>
    </header>
  );
};

export default Header;
