import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, getTodos }) => {
  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <Todo
          key={index}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          text={todo.title}
          id={todo.id}
          getTodos={getTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
