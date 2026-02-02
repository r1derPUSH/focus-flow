import { useState } from "react";
import "./UserTask.css";

function UserTask({
  task,
  tasks,
  descs,
  setTasks,
  setDescs,
  setCompletedTasks,
  completedTasks,
  setIsFocusMode,
  isFocusMode,
  setCurrentTask,
}) {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const handleRemove = () => {
    setTasks(tasks.filter((item) => item !== task));
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task)),
    );
    setDescs(descs.filter((item) => item !== localStorage.getItem(task)));
    localStorage.setItem(
      "task-description",
      JSON.stringify(
        descs.filter((item) => item !== localStorage.getItem(task)),
      ),
    );
  };

  const handleFocus = () => {
    setIsFocusMode(true);
    setCurrentTask(task);
  };

  const handleFinish = () => {
    // local strg

    const arr = JSON.parse(localStorage.getItem("finished-tasks") || "[]");

    arr.push(task);

    localStorage.setItem("finished-tasks", JSON.stringify(arr));

    // # 2

    const currentDesc = localStorage.getItem(task);

    const arr2 = JSON.parse(localStorage.getItem("finished-descs") || "[]");

    arr2.push(currentDesc);

    localStorage.setItem("finished-descs", JSON.stringify(arr2));

    // endpoint of lcl strg
    setCompletedTasks(completedTasks + 1);
    setTasks(tasks.filter((item) => item !== task));
    setDescs(descs.filter((item) => item != localStorage.getItem(task)));
    setFinishedTasks([...finishedTasks, task]);
    localStorage.setItem("total-tasks", tasks.length);
    localStorage.setItem("completed-tasks", completedTasks);
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task)),
    );
    localStorage.setItem(
      "task-description",
      JSON.stringify(
        descs.filter((item) => item != localStorage.getItem(task)),
      ),
    );
  };

  return (
    <div
      className={!isFocusMode ? "user-task" : "user-task-focusMode-activated"}
    >
      <div className="task-and-desc">
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
