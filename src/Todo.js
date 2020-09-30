import React from "react";
import "./Todo.css";

/**
 * Renders todo value
 *
 * Props
 * -- todo: "" todo value
 * -- status: "" pending or complete
 *
 * App -> TodoList -> TodoItem -> Todo
 */
function Todo({ todo, status }) {
  return (
    <span className={status}>
      {todo}
    </span>
  );
}

export default Todo;