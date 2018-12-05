import React, { Component } from 'react';
import './Todos.css';

export default class Todos extends Component {
  addClass = (id) => {
    const thisTodo = this.props.todos.find((todo) => todo.id === id);
    return thisTodo.status === "active" ? "active-todo" : "inactive-todo";
  }

  changeTodoStatus = (id) => {
    this.props.dispatch({
      type: "CHANGE_TODO_STATUS",
      payload: id
    })
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i} onClick={() => this.changeTodoStatus(todo.id)} className={this.addClass(todo.id)}>{todo.content}</li>)}
      </div>
    )
  }
}