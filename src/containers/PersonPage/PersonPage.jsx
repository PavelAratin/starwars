import styles from "./PersonPage.module.css";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";

import { SWAPI__PERSON } from "../../constans/api";
import { getImg } from "../../utils/utils";

import Preloader from "../../components/Preloader";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonFoto from "../../components/PersonPage/PersonFoto/PersonFoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import PersonFilms from "../../components/PersonPage/PersonFilms";

const PersonPage = () => {
  const [displayPreloader, setDisplayPreloader] = useState(true);
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState(null);
  const [personFoto, setPersonFoto] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  const [personId, setPersonId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${SWAPI__PERSON}/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayPreloader(false);
        setPersonInfo([
          {
            title: "Height",
            data: data.height,
          },
          {
            title: "Mass",
            data: data.mass,
          },
          {
            title: "Hair Color",
            data: data.hair_color,
          },
          {
            title: "Skin Color",
            data: data.skin_color,
          },
          {
            title: "Eye Color",
            data: data.eye_color,
          },
          {
            title: "Birth year",
            data: data.birth_year,
          },
          {
            title: "Gender",
            data: data.gender,
          },
        ]);
        setPersonName(data.name);
        //получение фото на детальной странице
        setPersonFoto(getImg(id));
        setPersonId(id);
        data.films.length && setPersonFilms(data.films);
      })
      .catch((error) => {
        console.log("Запрос не выполнился:", error);
      });
  }, []);

  return (
    <React.Fragment>
      <PersonLinkBack></PersonLinkBack>
      <div className={styles.wrapper}>
        {displayPreloader ? <Preloader></Preloader> : null}
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonFoto
            personFoto={personFoto}
            personName={personName}
            personId={personId}
          ></PersonFoto>
          {personInfo && <PersonInfo personInfo={personInfo}></PersonInfo>}
          {personFilms && <PersonFilms personFilms={personFilms}></PersonFilms>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonPage;
