import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        "Eat Breakfast",
        "Clean the room",
        "Learn React",
    ]);
    const [newTask, setNewTask] = useState("");

    // to change the text in the input box field
    const handleInputChange = (e) => setNewTask(e.target.value);
    function addTask() {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function removeTask(index) {
        const updateTaskList = tasks.filter((_, i) => i !== index);
        setTasks(updateTaskList);
    }

    function moveTaskUp(ind) {
        if (ind > 0) {
            const list = [...tasks];
            // swapping the list items
            [list[ind], list[ind - 1]] = [list[ind - 1], list[ind]];
            setTasks(list);
        }
    }

    function moveTaskDown(ind) {
        if (ind < tasks.length - 1) {
            const list = [...tasks];
            // swapping the list items
            [list[ind], list[ind + 1]] = [list[ind + 1], list[ind]];
            setTasks(list);
        }
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => handleInputChange(e)}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskUp(index)}
                        >
                            ▲
                        </button>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskDown(index)}
                        >
                            ▼
                        </button>
                        <button
                            className="deleteTask"
                            onClick={() => removeTask(index)}
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
