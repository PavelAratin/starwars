import styles from "./PersonFoto.module.css";

const PersonFoto = ({ personFoto, personName }) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personFoto} alt={personName}></img>
    </div>
  );
};

export default PersonFoto;
