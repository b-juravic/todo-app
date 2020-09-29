/** API calls for Todo App */
import axios from "axios";

const BASE_URL = "http://localhost:5000";

/** Get all items [GET] */
export async function getTodos() {
  let todos = await axios.get(`${BASE_URL}/todos`);

  return todos.data;
}

/** Add new item [POST] */
export async function addTodo(data) {
  await axios.post(`${BASE_URL}/todos`, data);
}

/** Delete existing item [DELETE] */
export async function deleteTodo(id) {
  await axios.delete(`${BASE_URL}/todos/${id}`);
}

/** Update existing todo value or status [PATCH] */
export async function updateTodo(data) {
  await axios.patch(`${BASE_URL}/todos/${data.id}`, data);
}