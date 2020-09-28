import React from "react";
import "./TodoItem.css";

/**
 * Renders single TodoItem
 *
 * Props
 * -- id:  unique id string
 * -- toto:  todo string
 *
 * App -> TodoList -> TodoItem
 */

function TodoItem({ id, todo }) {
  return (
    <li id= {id} className="TodoItem">
      <span>{todo}</span>
      <span><button>-</button> <button>Edit</button></span>
    </li>
  )
}

export default TodoItem;