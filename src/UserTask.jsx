import { useState } from "react";

function UserTask({
  task,
  tasks,
  setTasks,
  setCompletedTasks,
  completedTasks,
  setIsFocusMode,
  isFocusMode,
}) {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const handleRemove = () => {
    setTasks(tasks.filter((item) => item !== task));
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task))
    );
  };

  const handleFocus = () => {
    setIsFocusMode(true);
  };

  const handleFinish = () => {
    setCompletedTasks(completedTasks + 1);
    setTasks(tasks.filter((item) => item !== task));
    setFinishedTasks([...finishedTasks, task]);
    localStorage.setItem("total-tasks", tasks.length);
    localStorage.setItem("completed-tasks", completedTasks);
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task))
    );
  };

  return (
    <div
      className={!isFocusMode ? "user-task" : "user-task-focusMode-activated"}
    >
      <div className="taskAndDesc">
        <span className="task-name">{task}</span>
        <span className="task-description">{localStorage.getItem(task)}</span>
      </div>
      <div className="task-buttons">
        <button className="focus" onClick={handleFocus}>
          Focus
        </button>
        <button className="finish-button" onClick={handleFinish}>
          Finish
        </button>
        <button onClick={handleRemove} className="delete">
          Remove
        </button>
      </div>
    </div>
  );
}

export default UserTask;
