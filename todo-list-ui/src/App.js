import React from 'react';
import './App.css';
import Axios from 'axios';
import { TodoList } from './todo-list/todo-list.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  complete = (id) => {
    Axios.put(`http://localhost:8080/updateTodo/${id}`).then(() => {
      this.checkTodos();
    }).catch((err)=>{
      console.log(err)
    })
  }

  checkTodos = () => {
    Axios.get('http://localhost:8080/getTodo').then(data => {
      return JSON.parse(data.request.response);
    }).then(todos => {
      this.setState({todos: todos});
    }).catch((error)=>{
      console.log(error);
    });
  }

  componentDidMount(){
    this.checkTodos();
  }

  addTodo = (input) => {
    this.setState({newTodo:input.value}, () => {
      Axios.post('http://localhost:8080/addTodo', {task:input.value}).then(() => {
        this.checkTodos();
      }).catch((err) => {
        console.log(err);
      })
    })
  }

  render(){
    return (
      <div className='main'>
        <h1>Todo List</h1>
        <TodoList 
          todos={this.state.todos} 
          complete={this.complete} 
          addTodo={this.addTodo}
        />
      </div>
    )
  }
}

export default App;
