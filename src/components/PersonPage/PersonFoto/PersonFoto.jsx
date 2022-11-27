import styles from "./PersonFoto.module.css";
import { useDispatch } from "react-redux";
import { addPersonToFavorit, removePersonFavorit } from "../../../store/action";
import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

const PersonFoto = ({
  personFoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();
  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFavorit(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        addPersonToFavorit({
          [personId]: {
            name: personName,
            img: personFoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personFoto} alt={personName}></img>
      <img className={styles.favorite} onClick={dispatchFavoritePeople} src={personFavorite ? iconFavoriteFill : iconFavorite} alt="add to favorite" />
    </div>
  );
};

export default PersonFoto;
