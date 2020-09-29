import React, {useState} from "react";
import "./TodoItem.css";
import EditTodoForm from "./EditTodoForm";

/**
 * Renders single TodoItem
 *
 * State
 * -- editMode: boolean
 *
 * Props
 * -- id:  unique id string
 * -- toto:  todo string
 * -- editTodo: function to edit existing todo item
 * -- removeTodo: function to delete existing todo item
 *
 * App -> TodoList -> TodoItem
 */

function TodoItem({ id, todo, editTodo, removeTodo }) {
  const [editMode, setEditMode] = useState(false);

  const handleDelete = removeTodo.bind(null, id);

  function handleEdit() {
    setEditMode(true);
  }

  return (
    <li id= {id} className="TodoItem">
    {editMode
      ? <EditTodoForm id={id} currentTodo={todo} editTodo={editTodo} />
      : <>
        <span>{todo}</span>
        <span>
          <button onClick={handleDelete}>-</button>
          <button onClick={handleEdit}>Edit</button>
        </span></>}
    </li>
  );
}

export default TodoItem;