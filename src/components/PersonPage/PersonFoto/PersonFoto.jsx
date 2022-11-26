import styles from "./PersonFoto.module.css";
import { useDispatch } from "react-redux";
import { addPersonToFavorit, removePersonFavorit } from "../../../store/action";

const PersonFoto = ({ personFoto, personName, personId }) => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(
      addPersonToFavorit({
        [personId]: {
          name: personName,
          img: personFoto,
        },
      })
    );
  };
  const remove = () => {
    dispatch(removePersonFavorit(personId));
  };
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personFoto} alt={personName}></img>
      <button onClick={add}>Добавить в изранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </div>
  );
};

export default PersonFoto;
