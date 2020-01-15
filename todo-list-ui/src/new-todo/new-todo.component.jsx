import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './new-todo.styles.css';

export const NewTodo = ({addTodo, handleChange, newTodo}) => {
    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }
    return(
        <div className='new-todo'>
            <Button variant="outlined" size="small" color="primary" onClick={addTodo}>add</Button>
            <TextField onKeyUp={checkEnter} onChange={handleChange} fullWidth value={newTodo} label="add a new todo" id="new" size="small" />
        </div>
    )
}
