import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './new-todo.styles.css';

export const NewTodo = ({addTodo}) => {

    let input = document.getElementById('new');

    return(
        <div className='new-todo'>
            <Button variant="outlined" size="small" color="primary" onClick={() => addTodo(input)}>add</Button>
            <TextField fullWidth label="add a new todo" id="new" size="small" />
        </div>
    )
}
