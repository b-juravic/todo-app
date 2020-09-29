import React, {useState} from "react";
import "./TodoItem.css";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

/**
 * Renders Todo with delete, edit, and complete buttons or EditTodoForm
 *
 * State
 * -- editMode: boolean
 * -- todoStatus: "" pending or complete
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
  const [todoStatus, setTodoStatus] = useState(status);

  const handleDelete = removeTodo.bind(null, id);

  function handleEdit() {
    setEditMode(true);
  }

  function handleToggleStatus() {
    let newStatus = status === "pending"
      ? "complete"
      : "pending";

    updateTodo({id, todo, status: newStatus});
  }

  return (
    <li id= {id} className="TodoItem">
    {editMode
      ? <EditTodoForm id={id} currentTodo={todo} updateTodo={updateTodo} />
      : <>
        <Todo todo={todo} status={status}/>
        <span>
          {/* using X, pencil, and check mark unicode characters */}
          <button onClick={handleDelete}>&#10007;</button>
          <button onClick={handleEdit}>&#x270E;</button>
          <button onClick={handleToggleStatus}>&#10003;</button>
        </span></>}
    </li>
  );
}

export default TodoItem;