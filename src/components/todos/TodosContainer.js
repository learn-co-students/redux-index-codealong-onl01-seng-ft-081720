import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
// Todo in this case doesn't have any Redux related code, and is a regular, functional component.
  render() {
    console.log('todos')
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
// only concerned about getting state from redux
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect(mapStateToProps)(TodosContainer);
// export default connect()(TodosContainer);

// Ok, so we got our Todos component working simply by accessing the state from the store, and then iterating through the list in the Todos component.

// 