import './task.css';

const Task = (props) => {

    const doneOrUndo = (state, id) => {
        const task = props.tasks.find(item => item.id === id);
        let tasks = props.tasks.filter(item => item.id !== id);
        // console.log(task);
        if(state == 'done'){
            task.done = true;
            tasks.push(task);
            props.setTasks(tasks);
        }
        else{
            task.done = false;
            tasks = [task, ...tasks];
            props.setTasks(tasks);
        }
    };

    const destroy = (id) => {
        props.setTasks(props.tasks.filter(item => item.id !== id));
    }

    return (
        <div>
            {
                props.tasks.map(item => <div key={item.id} className='task'>
                    <p className="info"> { item.task } </p>
                    <div className="cta">
                        <button className={ (item.done)?'undo':'done' } onClick={() => doneOrUndo((item.done)?'undo':'done', item.id)}> { (item.done)? <i class="bi bi-x-circle-fill"></i> : <i class="bi bi-check-circle-fill"></i>}  </button>
                        <button className='trash' type='button' onClick={() => destroy(item.id)}> <i class="bi bi-trash3"></i> </button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Task;
