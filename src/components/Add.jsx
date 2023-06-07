import React, { useState } from 'react';
import './add.css';

const Add = (props) => {

    const [task, setTask] = useState();

    const add = () => {
        props.setTasks([{id : props.tasks.length + 1, task : task, done : false} ,...props.tasks]);
    }

    return (
        <div className='add'>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder='enter your task' />
            <span className='add_icon'><i class="bi bi-cloud-plus-fill" onClick={() => add()}></i></span>
            
        </div>
    );
}

export default Add;
