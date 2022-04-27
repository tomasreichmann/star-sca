import Game from "./Game";
import Header from "./Header";
import styles from "./App.module.css";
import "../styles.css";

export default function App() {
  return (
    <div className={styles.base}>
      <Header />
      <Game />
    </div>
  );
}
