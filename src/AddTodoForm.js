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
    <div className="AddTodoForm">
      <svg className="vertical-lines" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="82" y1="0" x2="82" y2="100" stroke="#ff9999" strokeWidth="2" />
        <line x1="89" y1="0" x2="89" y2="100" stroke="#ff9999" strokeWidth="2" />
      </svg>
      <form className="add-form" onSubmit={handleSubmit}>
        <button>
          <svg className="add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
          </svg>
        </button>
        <label htmlFor="new todo"></label>
        <input
          id="new todo"
          name="new todo"
          placeholder="new ToDo here"
          size="40"
          value={todo}
          onChange={handleChange}
        >
        </input>
      </form>
    </div>
  );
}

export default AddTodoForm;