const API_URL = "https://dummyjson.com/todos";

async function getTodos() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.todos;
}