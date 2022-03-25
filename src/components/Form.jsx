import axios from "axios";
import React from "react";

const Form = ({ inputText, setInputText, setStatus, getTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();

    if (inputText === "") {
      return alert("Please Enter Valid One");
    } else {
      const newTodo = { title: inputText, completed: false };
      await axios.post(
        "https://todo-django-restapi.herokuapp.com/api/task-create/",
        newTodo
      );
      // setTodos([...todos, { title: inputText, completed: false }]);
      setInputText("");
      getTodos();
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
