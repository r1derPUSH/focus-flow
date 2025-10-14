import React from "react";
import "./completedTasks.css";

function CompletedTaskComponent({ task, desc }) {
  const clearTaskBtn = () => {
    let arr1 = JSON.parse(localStorage.getItem("finished-tasks"));

    arr1 = arr1.filter((i) => i != task);

    localStorage.setItem("finished-tasks", JSON.stringify(arr1)) || [];

    let arr2 = JSON.parse(localStorage.getItem("finished-descs"));

    arr2 = arr2.filter((i) => i != desc);

    localStorage.setItem("finished-descs", JSON.stringify(arr2)) || [];
  };

  return (
    <div className="centerTasks">
      <div className="finished-task">
        <span>{task}</span> <span>{desc}</span>
        <button onClick={clearTaskBtn} className="clearTaskBtn">
          Clear Task
        </button>
      </div>
    </div>
  );
}

export default CompletedTaskComponent;
