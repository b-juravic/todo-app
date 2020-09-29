import React, { useState } from "react";

/**
 * Renders form to edit existing todo item
 *
 * Props
 * -- id: "" todo unique id
 * -- currentTodo: "" existing todo value
 * -- editTodo: function to add edit todo item
 *
 * State
 * -- todo: todo form value
 *
 * App -> TodoList -> TodoItem -> EditTodoForm
 */
function EditTodoForm({ id, currentTodo, editTodo }) {
  const [todo, setTodo] = useState(currentTodo);

  function handleChange(evt) {
    setTodo(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    editTodo({id, todo});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="edit todo"></label>
      <input
        id="edit todo"
        name="edit todo"
        placeholder="edit todo"
        value={todo}
        onChange={handleChange}
        >
      </input>
      <button>+</button>
    </form>
  );
}

export default EditTodoForm;