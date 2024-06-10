import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todoList, setTodoList, setTodo }) {
  const sortedList = todoList
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <ul className={styles.todolist}>
      {sortedList.map((item, index) => (
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
