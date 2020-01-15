import React from 'react';
import './App.css';
import Axios from 'axios';
import { TodoList } from './todo-list/todo-list.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: '',
      todoView: true
    }
    this.checkTodos();
  }

  complete = (id) => {
    Axios.put(`http://localhost:8080/updateTodo/${id}`).then(() => {
      this.checkTodos();
    }).catch((err)=>{
      console.log(err)
    })
  }

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:8080/deleteTodo/${id}`).then(() => {
      this.checkCompleted();
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

  checkCompleted = () => {
    Axios.get('http://localhost:8080/getCompleted').then(data => {
      return JSON.parse(data.request.response);
    }).then(completed => {
      this.setState({todos:completed})
    }).catch(err => {
      console.log(err)
    });
  }

  addTodo = () => {
    if (this.state.newTodo !== '' && this.state.newTodo !== undefined) {
      Axios.post('http://localhost:8080/addTodo', {task:this.state.newTodo}).then(() => {
        this.checkTodos();
      }).catch((err) => {
        console.log(err);
      }).finally(()=>{
        this.setState({newTodo:''})
      })
    }
  }

  handleChange = (e) => {
    this.setState({newTodo:e.target.value});
  }

  changeView = () => {
    this.setState(prevState => ({
      todoView:!prevState.todoView,
      todos: []
    }),() => {
      if (!this.state.todoView) {
        this.checkCompleted();
      } else {
        this.checkTodos();
      }
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
          newTodo={this.state.newTodo}
          handleChange={this.handleChange}
          todoView={this.state.todoView}
          changeView={this.changeView}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;
