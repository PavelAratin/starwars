import styles from "./App.module.css";
import cn from "classnames";

function App() {
  return (
    <div>
      <h1 className={cn(styles.header, styles.text)}>React</h1>
    </div>
  );
}

export default App;
