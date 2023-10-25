import styles from "./Board.module.css";
import Typo from "../Typo";

const Board = () => {
  return (
    <div className={styles.wrapper}>
      <Typo className={styles.header} color="yellow" variant="header4">
        БЕЗКОШТОВНО:
      </Typo>
      <ul className={styles.list}>
        <li>3D-СКАНУВАННЯ</li>
        <li>ДІАГНОСТИКА</li>
        <li>КОНСУЛЬТАЦІЯ ФІЗ. ТЕРАПЕВТА</li>
      </ul>
    </div>
  );
};

export default Board;
