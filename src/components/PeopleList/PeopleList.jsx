import styles from "./PeopleList.module.css";
import { getImg } from "../../utils/utils";
import React from "react";
import { Link } from "react-router-dom";
import { getPeoplePageId } from "../../utils/utils";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map((item,index) => (
        <li className={styles.list__item} key={item.name}>
          <Link to={`/people/${getPeoplePageId(item.url)}`}>
            <img
              className={styles.person__photo}
              src={getImg(item.url)}
              alt={item.name}
            ></img>
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
