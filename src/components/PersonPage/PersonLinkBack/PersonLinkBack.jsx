import styles from "./PersonLinkBack.module.css";
import { useNavigate } from "react-router";
import iconBack from "./img/back.svg";

const PersonLinkBack = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  // const handleGoBack = (e) => {
  //   e.preventDefault();
  //   console.log("handle go back");
  // };
  return (
    <a href="#" onClick={goBackHandler} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="goBack"></img>
      <span>Go Back</span>
    </a>
  );
};

export default PersonLinkBack;
