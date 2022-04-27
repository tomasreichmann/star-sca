import Game from "./components/Game";
import Header from "./components/Header";
import "./styles.css";
// import styles from "./App.module.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}
