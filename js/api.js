const API_URL = "https://dummyjson.com/todos";

async function getTodos() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.todos;
}

async function addTodo(todoText) {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      todo: todoText,
      completed: false,
      userId: 1
    })
  });
  const data = await response.json();
  return data;
}