import styles from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";
import UiButton from "../UI/UiButton";

const PeopleNavigation = ({ nextPage, prevPage, queryPage }) => {
  return (
    <div className={styles.container}>
      <Link
        to={`/people/?page=${Number(queryPage) - 1}`}
        className={styles.buttons}
      >
        <UiButton
        text="Previous"
        disabled={!prevPage}
        // theme='light'
        ></UiButton>
      </Link>
      <Link
        to={`/people/?page=${Number(queryPage) + 1}`}
        className={styles.buttons}
      >
        <UiButton
        text="Next"
        disabled={!nextPage}
        // theme='dark'
        ></UiButton>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
