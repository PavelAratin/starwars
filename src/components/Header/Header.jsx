import styles from "./Header.module.css";
import {NavLink } from "react-router-dom";

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
          <li>
            <NavLink to="/favorite">Favorites Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
