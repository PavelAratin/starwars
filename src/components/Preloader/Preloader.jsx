import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src="/assets/img/spinner.gif"></img>
    </div>
  );
};

export default Preloader;
