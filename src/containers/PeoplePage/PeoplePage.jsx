import React, { useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";
import { SWAPI__PEOPLE } from "../../constans/api";
import { getImg } from "../../constans/api";
import PeopleList from "../../components/PeopleList";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch(SWAPI__PEOPLE)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => console.log("Запрос не выполнился:", error));
  }, []);
  return (
    <React.Fragment>
      {people && <PeopleList people={people}></PeopleList>}
    </React.Fragment>
  );
};

export default PeoplePage;
