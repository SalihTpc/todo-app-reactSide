import React from "react";
import axios from "axios";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    // setTodos(todos.filter((el) => el.id !== todo.id));
    async function deleteTodo() {
      await axios.delete(
        `https://todo-django-restapi.herokuapp.com/api/task-delete/${todo.id}`
      );
    }
    deleteTodo();
  };
  const completeHandler = () => {
    const updatedTodo = { title: todo.title, completed: !todo.completed };
    async function changeTodo() {
      await axios.post(
        `https://todo-django-restapi.herokuapp.com/api/task-update/${todo.id}`,
        updatedTodo
      );
    }
    changeTodo();
    // setTodos(
    //   todos.map((item) => {
    //     if (item.id === todo.id) {
    //       console.log(item.id);
    //       return {
    //         ...item,
    //         completed: !item.completed,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <button type="button" onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button type="button" onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
