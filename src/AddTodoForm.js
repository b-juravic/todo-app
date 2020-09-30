import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AddTodoForm.css";

// TODO: prevent submission of blank item and trim left/right extra spaces

/**
 * Renders form to add new todo item
 *
 * Props
 * -- addNewTodo: function to add new todo item
 *
 * State
 * -- todo: todo form value
 *
 * App -> TodoList -> AddTodoForm
 */
function AddTodoForm({ addNewTodo }) {
  const [todo, setTodo] = useState("");

  function handleChange(evt) {
    setTodo(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    // create todo object, add unique id and status
    const newTodo = { id: uuid(), todo, status: "pending" };

    addNewTodo(newTodo);
    setTodo("");
  }

  return (
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="new todo"></label>
      <input
        id="new todo"
        name="new todo"
        placeholder="new todo"
        value={todo}
        onChange={handleChange}
        >
      </input>
      {/* using plus unicode character */}
      <button>&#65291;</button>
    </form>
  );
}

export default AddTodoForm;