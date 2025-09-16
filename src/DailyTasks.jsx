import React, { useState } from "react";
import UserDescriptionOfTask from "./UserDescriptionOfTask";

function DailyTasks() {
  const [tasks, setTasks] = useState([]);
  const [isUserDescriptionVisible, setIsUserDescriptionVisible] =
    useState(false);
  function handleAddTask() {
    setIsUserDescriptionVisible(true);
  }
  return (
    <>
      <div className="tasks-flex-div">
        <div className="tasks-div">
          <span className="span-daily-tasks-text">Daily Tasks: </span>
          <div className="task-user-description">
            {isUserDescriptionVisible ? <UserDescriptionOfTask /> : ""}
          </div>
          <button onClick={handleAddTask} className="add-task-btn">
            Add New Task
          </button>
        </div>
        <div>
          {/* <span>Tasks:</span> */}
          <div className="tasks-container"></div>
        </div>
      </div>
    </>
  );
}

export default DailyTasks;
