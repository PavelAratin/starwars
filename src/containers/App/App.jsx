import styles from "./App.module.css";
import PeoplePage from "../PeoplePage/PeoplePage";

function App() {
  return (
    <div>
      <h1 className={styles.header}>React</h1>
      <PeoplePage></PeoplePage>
    </div>
  );
}

export default App;
