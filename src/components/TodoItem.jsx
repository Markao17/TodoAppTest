import styles from "./TodoItem.module.css";
import { useState } from "react";

export default function TodoItem({ item, index, todoList, setTodoList }) {
  const [checked, setChecked] = useState("");

  function handleDelete() {
    const newTodoList = todoList.filter(
      (todoListItem) => item !== todoListItem
    );
    setTodoList(newTodoList);
  }

  function handleCheck() {
    if (checked === "") {
      setChecked(styles.todoitem__checked);
    } else {
      setChecked("");
    }
  }

  return (
    <li className={styles.todoitem} key={index}>
      <span className={checked} onClick={handleCheck}>
        {item}
      </span>
      <span>
        <button className={styles.modernButton} onClick={handleDelete}>
          X
        </button>
      </span>
    </li>
  );
}
