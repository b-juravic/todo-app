import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

/**
 * Fetches all todos, renders each TodoItem and AddTodoForm
 *
 * State
 * -- todoList: [ {id: "", todo: ""} ... ]
 * -- isLoading: boolean
 *
 * App -> TodoList
 */

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** fetch all todos and update state */
  useEffect(function fetchTodos () {
    async function getAllTodos() {
      const todos = await getTodos();
      setTodoList(todos);
      setIsLoading(false);
    }

    getAllTodos();
  }, []);

  /** add new todo and update state */
  async function addNewTodo(data) {
    await addTodo(data);
    setTodoList(t => ([
      ...t,
      data
    ]));
  }

  /** update todo or toggle todo status and update state */
  async function editTodo(data) {
    await updateTodo(data);
    setIsLoading(true);

    const todos = await getTodos();

    setTodoList(todos);
    setIsLoading(false);
  }

  /** delete todo and update state */
  async function removeTodo(id) {
    await deleteTodo(id);
    setIsLoading(true);

    const todos = await getTodos();

    setTodoList(todos);
    setIsLoading(false);
  }

  const todoItems = todoList.map(({ id, todo, status }) => {
    return (
      <TodoItem
        key={id}
        id={id}
        todo={todo}
        status={status}
        updateTodo={editTodo}
        removeTodo={removeTodo}
      />
    );
  });

  /** when loading, show loading indicator */
  if (isLoading) return <p>Loading...</p>

  return (
    <ul className="TodoList">
      <AddTodoForm addNewTodo={addNewTodo} />
      {todoItems}
      <svg className="svg-notebook-pattern" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

          <line x1="82" y1="0" x2="82" y2="10000" stroke="#ff9999" stroke-width="2" />
          <line x1="89" y1="0" x2="89" y2="10000" stroke="#ff9999" stroke-width="2" />
        <pattern id="pattern-notebook" x="0" y="0" width="100" height="25" patternUnits="userSpaceOnUse">
          <line x1=".1" y1="0" x2="100" y2="0" stroke="#4db8ff" strokeWidth="1.5" />
        </pattern>
        <rect fill="url(#pattern-notebook)" x="0" y="0" width="100%" height="100%"></rect>
      </svg>
    </ul>
  );
}

export default TodoList;
