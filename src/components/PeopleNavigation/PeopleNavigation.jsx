import styles from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";

const PeopleNavigation = ({ nextPage, prevPage, queryPage }) => {
  console.log(nextPage, prevPage);
  return (
    <div>
      <Link
        to={`/people/?page=${Number(queryPage) - 1}`}
        className={styles.link}
      >
        <button
          className={styles.buttons}
          //если заканчиваются ссылки для прехода (в api) то отключаем кнопку
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>
      <Link
        to={`/people/?page=${Number(queryPage) + 1}`}
        className={styles.link}
      >
        <button
          //если заканчиваются ссылки для прехода (в api) то отключаем кнопку
          className={styles.buttons}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
