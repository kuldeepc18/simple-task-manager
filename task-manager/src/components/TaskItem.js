import React from 'react';
const TaskItem = ({ task, onDelete }) => {
    return (
        <div>
            <p>{task.name}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
