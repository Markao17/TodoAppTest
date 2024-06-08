import { useState } from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Save the current todo list
    setTodoList([...todoList, todo]);
    // Clear the input field
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        type="text"
        value={todo}
        placeholder="Enter a new todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
