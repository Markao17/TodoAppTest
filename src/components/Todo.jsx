import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({ name: "", completed: false });

  return (
    <div>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Footer todoList={todoList} />
    </div>
  );
}
