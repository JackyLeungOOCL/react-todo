import React, { Component } from 'react';
import './Todos.css';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.props.initTodos();
  }

  addClass = (status) => {
    return status === "active" ? "active-todo" : "inactive-todo";
  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.todos
              .filter((todo) => 
                (todo.status === "active" || !this.refs.checkbox.checked)
              )
              .map((todo, i) => 
                <li key={i} 
                  onClick={() => this.props.changeTodoStatus(todo.id, todo.status)} 
                  className={this.addClass(todo.status)}
                >
                  {todo.content}
                </li>)
          }
        </div>
        <input 
          ref="checkbox"
          type="checkbox" 
          onChange={this.props.filterActive}
        />
          Only Show active
      </div>
    )
  }
}