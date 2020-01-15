import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon'
import './todo.styles.css';

export const Todo = ({todo, complete, todoView, deleteTodo }) => (
    <div className="todo">
        {todoView ? (
            <Checkbox size='small' color='primary' onClick={complete.bind(this,todo.id)} />
        ) : (
            <Icon className='delete' onClick={deleteTodo.bind(this,todo.id)} >delete_forever</Icon>
        )}
        <span>{todo.task}</span>
    </div>
)