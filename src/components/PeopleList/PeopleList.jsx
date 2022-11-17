import styles from "./PeopleList.module.css";
import { getImg } from "../../constans/api";
import React from "react";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map((item) => (
        <li className={styles.list__item} key={item.name}>
          <a href="#">
            <img
              className={styles.person__photo}
              src={getImg(item.url)}
              alt={item.name}
            ></img>
            <p>{item.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
