const API_URL = "https://dummyjson.com/todos";

async function getTodos() {
  const response = await fetch(`${API_URL}?limit=15`);
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

async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  const data = await response.json();
  return data;
}

async function updateTodo(id, updatedData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  const data = await response.json();
  return data;
}