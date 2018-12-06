import { connect } from "react-redux";
import Todos from "../components/Todos"

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  initTodos: () => {
    fetch("https://todo-list-data-api.herokuapp.com/api/todos/", {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: "INIT_TODO",
        payload: res._embedded.todos
      })
    })
  },

  changeTodoStatus: (id, status) => {
    const changeTodoItemStatus = (status) => {
      return status === "active" ? {status: "inactive"} : {status: "active"};
    }
    fetch("https://todo-list-data-api.herokuapp.com/api/todos/" + id, {
      method: 'PUT', 
      mode: 'cors', 
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify(changeTodoItemStatus(status))
    })
    .then(res => res.json())
    .then(dispatch({
      type: "CHANGE_TODO_STATUS",
      payload: id
    }))
  },

  filterActive: () => {
    dispatch({
      type: "UPDATE_SHOW_ACTIVE",
      payload: ''
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);