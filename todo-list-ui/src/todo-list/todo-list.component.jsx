import React from 'react';
import { Todo } from '../todo/todo.component';
import './todo-list.styles.css';
import { NewTodo } from '../new-todo/new-todo.component';

export const TodoList = ({todos, complete, addTodo, handleChange, newTodo, changeView, todoView, deleteTodo}) => {
    return (
        <div className='todo-list'>
            <h2>my todos...</h2>
            <div className='todos'>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} complete={complete} todoView={todoView} deleteTodo={deleteTodo} />
                ))}
            </div>
            {todoView && <NewTodo addTodo={addTodo} handleChange={handleChange} newTodo={newTodo} />}
            {todoView ? (
                <span onClick={changeView} className='change-view'>View completed todos</span>
            ) : (
                <span onClick={changeView} className='change-view'>View todos</span>
            )}
            
        </div>
    )
}