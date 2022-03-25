import axios from "axios";
import React from "react";

const Todo = ({ text, todo, getTodos }) => {
  const deleteHandler = () => {
    async function deleteTodo() {
      await axios.delete(
        `https://todo-django-restapi.herokuapp.com/api/task-delete/${todo.id}`
      );
      getTodos();
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
      getTodos();
    }
    changeTodo();
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
