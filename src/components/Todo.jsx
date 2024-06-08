import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
