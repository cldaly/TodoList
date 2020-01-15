import React from 'react';
import { Todo } from '../todo/todo.component';
import './todo-list.styles.css';
import { NewTodo } from '../new-todo/new-todo.component';

export const TodoList = ({todos, complete, addTodo, handleChange, newTodo, changeView, todoView}) => {
    return (
        <div className='todo-list'>
            <h2>my todos...</h2>
            <div className='todos'>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} complete={complete} todoView={todoView} />
                ))}
            </div>
            <NewTodo addTodo={addTodo} handleChange={handleChange} newTodo={newTodo} />
            <span onClick={changeView} className='change-view'>View completed todos</span>
        </div>
    )
}