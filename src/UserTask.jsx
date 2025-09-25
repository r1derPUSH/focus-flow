import { useState } from "react";

function UserTask({ task, tasks, setTasks }) {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const handleRemove = () => {
    setTasks(tasks.filter((item) => item !== task));
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task))
    );
  };

  const handleFinish = () => {
    setFinishedTasks([...finishedTasks, task]);
    localStorage.setItem("finished-tasks", JSON.parse(finishedTasks));
  };

  return (
    // <div className="flexTask">
    <div className="user-task">
      <div className="taskAndDesc">
        <span className="task-name">{task}</span>
        <span className="task-description">{localStorage.getItem(task)}</span>
      </div>
      <div className="task-buttons">
        <button className="focus">Focus</button>
        <button className="finish-button" onClick={handleFinish}>
          Finish
        </button>
        <button onClick={handleRemove} className="delete">
          Remove
        </button>
      </div>
    </div>
    // </div>
  );
}

export default UserTask;
