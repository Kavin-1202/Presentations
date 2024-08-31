import React, { useState, useEffect } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Fetch tasks from the backend
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(' http://localhost:4000/tasks');
            const data = await response.json();
            setTasks(data);
        };

        fetchTasks();
    }, []); // Empty dependency array means this runs once when the component mounts

    // Add a new task
    const addTask = async () => {
        const response = await fetch(' http://localhost:4000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTask, completed: false })
        });

        const task = await response.json();
        // Immediately update the tasks state with the newly added task
        setTasks([...tasks, task]);
        setNewTask(""); // Clear the input field
    };

    const updateTask = async (id, completed) => {
        try {
            const response = await fetch(`http://localhost:4000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update task');
            }
    
            const updatedTask = await response.json();
    
            // Update the tasks state with the updated task
            setTasks(prevTasks =>
                prevTasks.map(task => (task.id === id ? updatedTask : task))
            );
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };
    
    // Delete a task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'DELETE'
        });

        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <ul style={{'listStyle':'none'}}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.completed}
                            onChange={() => updateTask(task.id, !task.completed)}
                        />
                        {task.title}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskList;
