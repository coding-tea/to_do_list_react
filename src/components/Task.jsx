import React from 'react';

const Task = (props) => {
    return (
        <div className='task'>
            {
                props.tasks.map(item => <div key={item.id}>
                    <p className="info"> { item.task } </p>
                    <button className={ (item.done)?'done':'undo' }> { (item.done)?'done':'undo'}  </button>
                </div>)
            }
        </div>
    );
}

export default Task;
