import React, { useState } from "react";
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
      <span>
        <svg className="vertical-lines" width="100" height="24" xmlns="http://www.w3.org/2000/svg">
          <line x1="82" y1="0" x2="82" y2="50" stroke="#ff9999" strokeWidth="2" />
          <line x1="89" y1="0" x2="89" y2="50" stroke="#ff9999" strokeWidth="2" />
        </svg>
      </span>
      {editMode
        ? <EditTodoForm id={id} currentTodo={todo} updateTodo={updateTodo} />
        : <>
          <Todo todo={todo} status={status} />
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

// return (
//   <li id= {id} className="TodoItem">
//     <span>
//      <svg className="vertical-lines" width="100%" height="24" xmlns="http://www.w3.org/2000/svg">
//        <line x1="82" y1="0" x2="82" y2="200" stroke="#ff9999" strokeWidth="2" />
//        <line x1="89" y1="0" x2="89" y2="200" stroke="#ff9999" strokeWidth="2" />
//      </svg>
//    </span>
//   {editMode
//     ? <EditTodoForm id={id} currentTodo={todo} updateTodo={updateTodo} />
//     : <>
//       <Todo todo={todo} status={status}/>
//       <span>
//         {/* using X, pencil, and check mark unicode characters */}
//         <button onClick={handleDelete}>&#10007;</button>
//         <button onClick={handleEdit}>&#x270E;</button>
//         <button onClick={handleToggleStatus}>&#10003;</button>
//       </span></>}
//   </li>
// );

// return (
//   <li id= {id} className="TodoItem">
//     <span>
//      <svg className="vertical-lines" width="100%" height="24" xmlns="http://www.w3.org/2000/svg">
//        <line x1="82" y1="0" x2="82" y2="50" stroke="#ff9999" strokeWidth="2" />
//        <line x1="89" y1="0" x2="89" y2="50" stroke="#ff9999" strokeWidth="2" />
//      </svg>
//     </span>
//     <Todo todo={todo} status={status}/>
//     <span className="button-collection">
//       {/* using X, pencil, and check mark unicode characters */}
//       <button onClick={handleDelete}>&#10007;</button>
//       <button onClick={handleEdit}>&#x270E;</button>
//       <button onClick={handleToggleStatus}>&#10003;</button>
//     </span>
//   </li>
// );