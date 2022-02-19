import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // getLocalTodos();
    fetchTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    fetchTodos();
    // saveLocalTodos();
    // console.log("heyy");
  }, [todos, status]);

  async function fetchTodos() {
    try {
      const result = await axios.get(
        "https://todo-django-restapi.herokuapp.com/api/task-list/"
      );
      setTodos(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  // function saveLocalTodos() {
  //   axios
  //     .post(
  //       "https://todo-django-restapi.herokuapp.com/api/task-create/",
  //       todos[todos.length - 1]
  //     )
  //     .then(
  //       (response) => {
  //         console.log(response);
  //         console.log(todos[todos.length - 1]);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
