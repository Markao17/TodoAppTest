import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.header}>Todo List</h1>
    </header>
  );
}
