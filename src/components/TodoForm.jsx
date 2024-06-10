import { useState } from "react";
import styles from "./TodoForm.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "50px 100px",
  },
};

export default function TodoForm({ todoList, setTodoList, todo, setTodo }) {
  Modal.setAppElement(document.getElementById("root"));

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todoList);

    if (todoList.find((item) => item.name === todo.name)) {
      // alert("This todo already exists!");
      setIsOpen(true);
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

  function closeModal() {
    setIsOpen(false);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Item already exists!"
        style={customStyles}
      >
        <h2>This todo already exists!</h2>
      </Modal>
    </form>
  );
}
