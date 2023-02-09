export const addTodo = (content) => ({
  type: "ADD_TODO",
  content,
});

export const editTodo = (id, content) => ({
  type: "EDIT_TODO",
  id,
  content,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
