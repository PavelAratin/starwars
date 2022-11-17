import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>Ошибка, данные не получены</p>
    </>
  );
};

export default ErrorMessage;
