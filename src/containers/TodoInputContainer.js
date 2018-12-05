import { connect } from "react-redux";
import TodoInput from "../components/TodoInput"


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    fetch("https://todo-list-data-api.herokuapp.com/api/todos", {
      method: 'POST', 
      mode: 'cors', 
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify(newTodoItem)
    })
    .then(res => res.json())
    .then(({id, status, content}) => {
      dispatch({
        type: "ADDTODO",
        payload: {id, status, content}
      })
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);