import styles from "./App.module.css";
import PeoplePage from "../PeoplePage/PeoplePage";
import HomePage from "../HomePage";

import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../../components/Header";
import ErrorPage from "../ErrorPage";
import PersonPage from "../PersonPage";
import FavoritesPage from "../FavoritesPage";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/people" element={<PeoplePage></PeoplePage>}></Route>
        <Route path="/people/:id" element={<PersonPage></PersonPage>}></Route>
        <Route path="/favorite" element={<FavoritesPage></FavoritesPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
