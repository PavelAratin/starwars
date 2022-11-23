import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {personInfo.map(({ title, data }) => (
          <li className={styles.list__item} key={title}>
            <span className={styles.item__title}>
              {title}:{data}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonInfo;
