import styles from "./TodoItem.module.css";
import { useState } from "react";

export default function TodoItem({ item, index, todoList, setTodoList }) {
  const [checked, setChecked] = useState(false);

  function handleDelete() {
    const newTodoList = todoList.filter(
      (todoListItem) => item !== todoListItem
    );
    setTodoList(newTodoList);
  }

  function handleCheck(name) {
    const newArray = todoList.map((todo) =>
      todo.name === name ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newArray);
    setChecked(!checked);
  }

  return (
    <li className={styles.todoitem} key={index}>
      <span
        className={checked ? styles.todoitem__checked : ""}
        onClick={() => handleCheck(item.name)}
      >
        {item.name}
      </span>
      <span>
        <button className={styles.modernButton} onClick={handleDelete}>
          X
        </button>
      </span>
    </li>
  );
}
