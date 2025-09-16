import React, { useState } from "react";

function DailyTasks() {
  function handleAddTask() {
    console.log("worked out");
  }
  return (
    <>
      <div className="tasks-flex-div">
        <div className="tasks-div">
          <span className="span-daily-tasks-text">Daily Tasks: </span>
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
