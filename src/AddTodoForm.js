import React, { useState } from "react";
import { v4 as uuid } from "uuid";

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

    // create todo object and add unique id
    const newTodo = { id: uuid(), todo };

    addNewTodo(newTodo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new todo"></label>
      <input
        id="new todo"
        name="new todo"
        placeholder="new todo"
        value={todo}
        onChange={handleChange}
        >
      </input>
      <button>+</button>
    </form>
  );
}

export default AddTodoForm;