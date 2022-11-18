import styles from "./ErrorPage.module.css";
import { useLocation } from "react-router";

const ErrorPage = () => {
  const location = useLocation()
  return (
    <>
    <img className={styles.img} src='/assets/img/not-found.jpg' alt="Not Found" />
    <p className={styles.text}>No match for: <u>{location.pathname}</u></p>
</>
  );
};

export default ErrorPage;
