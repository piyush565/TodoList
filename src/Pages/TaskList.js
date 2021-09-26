import React from 'react';
import { useTasks } from '../context/TaskProvider';
import Task from './Task';

function TaskList() {

    const {tasks} = useTasks()
    return (
        <table>
            <tbody>{tasks.map((task, i) => <Task key={i}{...task}/>)}
                
            </tbody>
            
        </table>
    );
}

export default TaskList;