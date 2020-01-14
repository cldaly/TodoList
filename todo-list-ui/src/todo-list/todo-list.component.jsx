import React from 'react';
import { Todo } from '../todo/todo.component';
import './todo-list.styles.css';
import { NewTodo } from '../todo/new-todo/new-todo.component';

export const TodoList = ({todos, complete, addTodo, handleChange, newTodo}) => {
    return (
        <div className='todo-list'>
            <h2>my todos...</h2>
            <div className='todos'>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} complete={complete} />
                ))}
                <NewTodo addTodo={addTodo} handleChange={handleChange} newTodo={newTodo} />
            </div>
        </div>
    )
}