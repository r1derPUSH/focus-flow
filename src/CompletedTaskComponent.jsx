import React from "react";
import "./completedTasks.css";

function CompletedTaskComponent({ task, desc }) {
  return (
    <div className="centerTasks">
      <div className="finished-task">
        <span>{task}</span> <span>{desc}</span>
        <button>Clear Task</button>
      </div>
    </div>
  );
}

export default CompletedTaskComponent;
