import { connect } from "react-redux";
import TodoInput from "../components/TodoInput"


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    dispatch({
      type: "ADDTODO",
      payload: newTodo
    });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);