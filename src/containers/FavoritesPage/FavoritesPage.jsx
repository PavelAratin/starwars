import styles from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  console.log(storeData);
  return (
    <>
      <h1>FavoritesPage</h1>
    </>
  );
};

export default FavoritesPage;
