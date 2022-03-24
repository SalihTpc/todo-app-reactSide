import React from "react";
import axios from "axios";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    const postTodos = async () => {
      const newTodo = { title: inputText, completed: false };
      await axios.post(
        "https://todo-django-restapi.herokuapp.com/api/task-create/",
        newTodo
      );
    };
    if (inputText === "") {
      return alert("Please Enter Valid One");
    } else {
      postTodos();
      setTodos([...todos, { title: inputText, completed: false }]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <div className="upper">
        <input
          autoFocus
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
