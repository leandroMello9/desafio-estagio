const initialState = {
  todos: localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [],
  lastId: localStorage.getItem("lastId")
    ? parseInt(localStorage.getItem("lastId"))
    : 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "todos/SET_TODO": {
      const todos = [...state.todos, action.payload];
      localStorage.setItem("todoList", JSON.stringify(todos));
      return {
        ...state,
        todos: todos
      };
    }
    case "todos/SET_TODOS":
      return {
        ...state,
        todos: action.newValue
      };
    case "todos/SET_LAST_ID": {
      const lastId = ++state.lastId;
      localStorage.setItem("lastId", `${lastId}`);
      return {
        ...state,
        lastId: lastId
      };
    }
    case "todos/EDIT_TODO": {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      state.todos[index] = { ...action.payload };

      localStorage.setItem("todoList", JSON.stringify(state.todos));
      return {
        ...state
      };
    }
    case "todos/REMOVE_TODO": {
      const todos = state.todos.filter(todo => todo.id != action.payload.id);
      localStorage.setItem("todoList", JSON.stringify(todos));
      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};
