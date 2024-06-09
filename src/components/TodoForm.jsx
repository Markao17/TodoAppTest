import { useState } from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm({ todoList, setTodoList, todo, setTodo }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (todoList.find((item) => item.name === todo.name)) {
      alert("This todo already exists!");
      return;
    }
    // Save the current todo list
    setTodoList([...todoList, todo]);
    // Clear the input field
    setTodo({
      name: "",
      completed: false,
    });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        type="text"
        value={todo.name}
        placeholder="Enter a new todo"
        onChange={(e) => setTodo({ name: e.target.value, completed: false })}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
