import { connect } from "react-redux";
import Todos from "../components/Todos"

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
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
    .then(res => console.log(res))
    .then(dispatch({
      type: "CHANGE_TODO_STATUS",
      payload: id
    }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);