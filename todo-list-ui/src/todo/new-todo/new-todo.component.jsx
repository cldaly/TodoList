import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './new-todo.styles.css';

export const NewTodo = ({addTodo, handleChange, newTodo}) => {

    let input = document.getElementById('new');

    return(
        <div className='new-todo'>
            <Button variant="outlined" size="small" color="primary" onClick={addTodo.bind(this,input)}>add</Button>
            <TextField onChange={handleChange} fullWidth label="add a new todo" value={newTodo} id="new" size="small" />
        </div>
    )
}