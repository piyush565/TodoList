import React from 'react';
import { useTasks } from '../context/TaskProvider';

function Task({id,task,complete}) {
const {setStatusTask} = useTasks()
const checkTask = e=> setStatusTask(id, e.target.checked)
    return (
        <tr>
        <td>
        <input type="checkbox" onChange={checkTask}/>
        </td>
        <td>
            <span style={{color: 'white'}} className= {complete? 'task-done' :''}>{task}</span>
        </td>
        </tr>
    );
}

export default Task;