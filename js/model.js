let todos = [];

function setTodos(todoArray) {
  todos = todoArray;
}

function getTodosFromState() {
  return todos;
}

function addTodoToState(todoItem) {
  todos = [todoItem, ...todos];
}

function deleteTodoFromState(id) {
    todos = todos.filter(function(todo){
        return todo.id !== id;
    });
}

function toggleTodoInState(id) {
  const selectedTodo = todos.find(function(todo) {
    return todo.id === id;
  });

  if (!selectedTodo) {
    return;
  }

  const updatedTodo = {
    ...selectedTodo,
    completed: !selectedTodo.completed
  };

  const remainingTodos = todos.filter(function(todo) {
    return todo.id !== id;
  });

  todos = [updatedTodo, ...remainingTodos];
}

function editTodoInState(id, newText) {
  todos = todos.map(function(todo) {
    if (todo.id === id) {
      return {
        ...todo,
        todo: newText
      };
    }

    return todo;
  });
}