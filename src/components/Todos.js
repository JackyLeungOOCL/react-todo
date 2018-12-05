import React, { Component } from 'react';
import './Todos.css';

export default class Todos extends Component {
  addClass = (status) => {
    return status === "active" ? "active-todo" : "inactive-todo";
  }

  // changeTodoStatus = (id) => {
  //   this.props.dispatch({
  //     type: "CHANGE_TODO_STATUS",
  //     payload: id
  //   })
  // }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i} onClick={() => this.props.changeTodoStatus(todo.id, todo.status)} className={this.addClass(todo.status)}>{todo.content}</li>)}
      </div>
    )
  }
}