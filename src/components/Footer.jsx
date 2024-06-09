import TotalItems from "./TotalItems";
import CompletedItems from "./CompletedItems";
import styles from "./Footer.module.css";

export default function Footer({ todoList }) {
  return (
    <footer className={styles.footer}>
      <TotalItems todoList={todoList} />
      <CompletedItems todoList={todoList} />
    </footer>
  );
}
