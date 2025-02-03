import React, { useState } from 'react';
const AddTask = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('');
    const handleSubmit = () => {
        if (taskName.trim()) {
            onAdd(taskName);
            setTaskName('');
        }
    };
    return (
        <div>
            <input type="text" value={taskName} onChange={(e) =>
                setTaskName(e.target.value)} />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default AddTask;