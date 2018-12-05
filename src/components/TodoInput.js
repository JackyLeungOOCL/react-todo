import React, { Component } from 'react';
import { connect } from "react-redux";

class TodoInput extends Component {
  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "ADDTODO",
      payload: newTodo
    });
  }
  dispatch = () => {
    const {input} = this.refs
    this.addNewTodo(input.value)
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoInput);