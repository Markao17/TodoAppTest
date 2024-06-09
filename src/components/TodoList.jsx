import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todoList, setTodoList, setTodo }) {
  return (
    <ul className={styles.todolist}>
      {todoList.map((item, index) => (
        <TodoItem
          key={index}
          setTodo={setTodo}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
  );
}
