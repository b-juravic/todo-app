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
    <div className="TodoList">
      {todoItems}
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
}

export default TodoList;