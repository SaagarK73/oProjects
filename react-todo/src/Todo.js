import React, { useState } from "react";
import "./Todo.css";
import { CreateTask } from "./CreateTask";

function Task({ task, index, completeTask, deleteTask }) {
  return (
    <>
      <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        <input type="checkbox" onClick={(e) => completeTask(e, index)}></input>
        {task.title}
        <button onClick={() => deleteTask(index)}>DELETE</button>
      </div>
    </>
  );
}
function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: false,
    },
    {
      title: "Do your workout",
      completed: false,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (e, index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = e.target.checked;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
