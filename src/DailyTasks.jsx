import React, { useState } from "react";
import UserDescriptionOfTask from "./UserDescriptionOfTask";

function DailyTasks() {
  const localStorageTasksArr = JSON.parse(localStorage.getItem("task-name"));
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const arr = localStorageTasksArr ? localStorageTasksArr : [];
    return arr;
  });
  const [isUserDescriptionVisible, setIsUserDescriptionVisible] =
    useState(false);
  function handleAddTask() {
    setIsUserDescriptionVisible(true);
    setTasks([...localStorageTasksArr, inputValue]);
    console.log(tasks);
  }
  return (
    <>
      <div className="tasks-flex-div">
        <div className="tasks-div">
          <span className="span-daily-tasks-text">Daily Tasks: </span>
          {isUserDescriptionVisible ? (
            <div className="task-user-description">
              <UserDescriptionOfTask
                setInputValue={setInputValue}
                isVisible={isUserDescriptionVisible}
                setIsVisible={setIsUserDescriptionVisible}
              />
            </div>
          ) : (
            ""
          )}
          <div className="add-task-btn-div">
            <button onClick={handleAddTask} className="add-task-btn">
              Add New Task
            </button>
          </div>
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
