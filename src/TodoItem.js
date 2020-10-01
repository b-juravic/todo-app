import React, { useState } from "react";
import "./TodoItem.css";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

/**
 * Renders Todo with delete, edit, and complete onCLick icons or EditTodoForm
 *
 * State
 * -- editMode: boolean
 *
 * Props
 * -- id:  "" unique id
 * -- todo:  "" todo value
 * -- status: "" pending || complete
 * -- updateTodo: function to edit existing todo value or toggle todo status
 * -- removeTodo: function to delete existing todo item
 *
 * App -> TodoList -> TodoItem
 */

function TodoItem({ id, todo, status, updateTodo, removeTodo }) {
  const [editMode, setEditMode] = useState(false);

  const handleDelete = removeTodo.bind(null, id);

  function handleEdit() {
    setEditMode(true);
  }

  function handleToggleStatus() {
    let newStatus = status === "pending"
      ? "complete"
      : "pending";

    updateTodo({ id, todo, status: newStatus });
  }

  return (
    <li id={id} className="TodoItem">
      <svg className="vertical-lines" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="82" y1="0" x2="82" y2="100" stroke="#ff9999" strokeWidth="2" />
        <line x1="89" y1="0" x2="89" y2="100" stroke="#ff9999" strokeWidth="2" />
      </svg>
      {editMode
        ? <EditTodoForm id={id} currentTodo={todo} updateTodo={updateTodo} />
        : <>
          <span className="icon-collection">
            <svg className="icon-delete" onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm4.2 18L12 13.7 8 18 6 16.2l4-4.2L6 8 7.8 6l4.2 4L16 6l2 1.8-4.2 4.2 4.2 4-1.8 2z" />
            </svg>

            <svg className="icon-edit" onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 100 24 12 12 0 000-24zM7 17l1-4 3.1 3L7 17zm5.2-1.9L9 12 14.8 6 18 9.2l-5.8 6z" />
            </svg>

            <svg className="icon-complete-status" onClick={handleToggleStatus} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm-1.3 17.3l-4.4-4.4L8 11.1l2.6 2.5 5.7-5.8 1.9 1.8-7.6 7.7z" />
            </svg>
          </span>
          <Todo todo={todo} status={status} /></>}
    </li>
  );
}

export default TodoItem;