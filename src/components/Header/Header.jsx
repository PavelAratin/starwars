import styles from "./Header.module.css";
import { Link,NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <ul className={styles.list__container}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
