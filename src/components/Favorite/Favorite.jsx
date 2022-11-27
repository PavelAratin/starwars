import { Link } from "react-router-dom";
import styles from "./Favorite.module.css";
import icon from "./img/bookmark.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [count, setCount] = useState();
  const storeDate = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    const length = Object.keys(storeDate).length;
    setCount(length);
  });
  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="favorites"></img>
      </Link>
    </div>
  );
};

export default Favorite;
