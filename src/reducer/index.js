const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "INIT_TODO":
    return {
      ...state,
      todos: payload
    }

  case "ADDTODO":
    return {
      ...state,
      todos: state.todos.concat(payload)
    }

  case "CHANGE_TODO_STATUS":
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === payload) {
          if (todo.status === "active") {
            return {
              ...todo,
              status: "inactive"
            };
          }
          return {
            ...todo,
            status: "active"
          };
        }
        return todo;
      })
    }

  case "UPDATE_SHOW_ACTIVE":
    return {
      ...state,
      todos: state.todos.concat()
    }

  default:
    return state
  }
}
