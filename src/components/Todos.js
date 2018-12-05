import React, { Component } from 'react';

export default class Todos extends Component {
  changeTodoStatus = () => {
    return;
  }
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i} onClick={this.changeTodoStatus}>{todo.content}</li>)}
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   todos: state.todos
// });

// export default connect(mapStateToProps)(Todos);