import styles from "./PersonFilms.module.css";
import { useEffect } from "react";
import { useState } from "react";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);
  const [dispalyPreloader, setDisplayPreloader] = useState(true);
  const promises = personFilms.map((personUrl) => {
    return fetch(personUrl).then((person) => person.json());
  });
  useEffect(() => {
    Promise.all(promises).then((data) => setFilmsName(data));
    setDisplayPreloader(false);
  }, [personFilms]);
  return (
    <div className={styles.wrapper}>
      {dispalyPreloader ? (
        <h2 style={{ color: "white" }}>Загрузка данных...</h2>
      ) : (
        <ul className={styles.list__container}>
          {filmsName
            //sort исп для отображения номеров эпизодов по порядку
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ title, episode_id }) => (
              <li className={styles.list__item} key={episode_id}>
                <span className={styles.item__episide}>
                  Episode {episode_id}
                </span>
                <span className={styles.colon}>:</span>
                <span className={styles.title}>{title}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default PersonFilms;
