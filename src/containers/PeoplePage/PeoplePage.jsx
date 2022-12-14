import React, { useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";
import { SWAPI__PEOPLE } from "../../constans/api";
import PeopleList from "../../components/PeopleList";
import Preloader from "../../components/Preloader";
import ErrorMessage from "../../components/ErrorMessage";
import PeopleNavigation from "../../components/PeopleNavigation";
import { getPeoplePageId } from "../../utils/utils";
//хук для получения query-параметра (задали его в хедере)
import { useSearchParams } from "react-router-dom";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(); //деструктуризировали
  const queryPage = searchParams.get("page"); //получили номер того что стоит после ? в адресной строке
  useEffect(() => {
    //добавили номер страницы в запрос
    fetch(SWAPI__PEOPLE + queryPage)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        setPrevPage(data.previous);
        setNextPage(data.next);
        // setCounterPage(getPeoplePageId())
      })
      .catch((error) => {
        setErrorApi(true);
        console.log("Запрос не выполнился:", error);
      });
  }, [queryPage]);
  return (
    <React.Fragment>
      <PeopleNavigation
        prevPage={prevPage}
        nextPage={nextPage}
        queryPage={queryPage}
      ></PeopleNavigation>
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
