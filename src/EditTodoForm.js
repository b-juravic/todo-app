import React, { useState } from "react";

/**
 * Renders form to edit existing todo item
 *
 * Props
 * -- id: "" todo unique id
 * -- currentTodo: "" existing todo value
 * -- editTodo: function to edit todo value
 *
 * State
 * -- todo: todo form value
 *
 * App -> TodoList -> TodoItem -> EditTodoForm
 */
function EditTodoForm({ id, currentTodo, updateTodo }) {
  const [todo, setTodo] = useState(currentTodo);

  function handleChange(evt) {
    setTodo(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    updateTodo({id, todo});
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
      {/* using plus unicode character */}
      <button>&#65291;</button>
    </form>
  );
}

export default EditTodoForm;