import styles from "./UiButton.module.css";
import cn from "classnames";

const UiButton = ({ text, disabled, theme = "dark" }) => {
  return (
    <button
      className={cn(styles.button, styles[theme])}
      //если заканчиваются ссылки для прехода (в api) то отключаем кнопку
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default UiButton;
