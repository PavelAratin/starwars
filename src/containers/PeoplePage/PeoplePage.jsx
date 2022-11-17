import React, { useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";
import { SWAPI__PEOPLE } from "../../constans/api";
import { getImg } from "../../constans/api";
import PeopleList from "../../components/PeopleList";
import Preloader from "../../components/Preloader";
import ErrorMessage from "../../components/ErrorMessage";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  useEffect(() => {
    fetch(SWAPI__PEOPLE)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => {
        setErrorApi(true);
        console.log("Запрос не выполнился:", error);
      });
  }, []);
  return (
    <React.Fragment>
      {errorApi ? (
        <ErrorMessage></ErrorMessage>
      ) : (
        <>
          {!people.length ? (
            <Preloader></Preloader>
          ) : (
            <PeopleList people={people}></PeopleList>
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default PeoplePage;
