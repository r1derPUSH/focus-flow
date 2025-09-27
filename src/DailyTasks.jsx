import React, { useEffect, useState } from "react";
import UserDescriptionOfTask from "./UserDescriptionOfTask";
import UserTask from "./UserTask";

function DailyTasks({
  setTotalTasks,
  setCompletedTasks,
  completedTasks,
  totalTasks,
  setIsFocusMode,
  isFocusMode,
}) {
  const localStorageTasksArr = JSON.parse(localStorage.getItem("task-name"));
  const localStorageDescsArr = JSON.parse(
    localStorage.getItem("task-descripton")
  );
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const arr = localStorageTasksArr ? localStorageTasksArr : [];
    return arr;
  });
  const [descs, setDescs] = useState(() => {
    const arr = localStorageDescsArr ? localStorageDescsArr : [];
    return arr;
  });
  const [isUserDescriptionVisible, setIsUserDescriptionVisible] =
    useState(false);

  // useEffect(() => {
  //   // setTasks([...tasks, localStorageTasksArr]);
  //   console.log("Tasks: " + tasks);
  // }, [tasks]);

  function handleAddTask() {
    setIsUserDescriptionVisible(true);
    localStorage.setItem("total-tasks", tasks.length);
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== task))
    );
    setTotalTasks(tasks.length);
  }
  console.log(tasks);
  return (
    <>
      <div
        className={
          !isFocusMode ? "tasks-flex-div" : "tasks-flex-div-focusMode-activated"
        }
      >
        <div className="tasks-div">
          <span className="span-daily-tasks-text">Daily Tasks: </span>
          {isUserDescriptionVisible ? (
            <div className="task-user-description">
              <UserDescriptionOfTask
                completedTasks={completedTasks}
                setTasks={setTasks}
                setDescs={setDescs}
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
          <div className="tasks-container">
            {tasks.map((item, idx) => {
              return (
                <UserTask
                  isFocusMode={isFocusMode}
                  setIsFocusMode={setIsFocusMode}
                  completedTasks={completedTasks}
                  setCompletedTasks={setCompletedTasks}
                  key={idx}
                  task={item}
                  setTasks={setTasks}
                  tasks={tasks}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyTasks;
