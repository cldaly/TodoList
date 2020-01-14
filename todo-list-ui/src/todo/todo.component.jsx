import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './todo.styles.css';

export const Todo = ({todo, complete}) => (
    <div className="todo">
        <Checkbox size='small' color='primary' onClick={complete.bind(this,todo.id)} /><span>{todo.task}</span>
    </div>
)