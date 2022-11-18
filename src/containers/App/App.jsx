import styles from "./App.module.css";
import PeoplePage from "../PeoplePage/PeoplePage";
import HomePage from "../HomePage";

import { NavLink, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Header from "../../components/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
        </Route>
        <Route path='/people' element={<PeoplePage></PeoplePage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
