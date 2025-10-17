import { useState } from "react";
import UserDescriptionOfTask from "./UserDescriptionOfTask";
import UserTask from "./UserTask";

function DailyTasks({
  setTotalTasks,
  setCompletedTasks,
  completedTasks,
  totalTasks,
  setIsFocusMode,
  isFocusMode,
  setCurrentTask,
  setCurrentDescription,
  currentTask,
  tasks,
  setTasks,
}) {
  const localStorageDescsArr = JSON.parse(
    localStorage.getItem("task-descripton")
  );
  const [inputValue, setInputValue] = useState("");
  const [descs, setDescs] = useState(() => {
    const arr = localStorageDescsArr ? localStorageDescsArr : [];
    return arr;
  });

  const [isUserDescriptionVisible, setIsUserDescriptionVisible] =
    useState(false);

  function handleAddTask() {
    setIsUserDescriptionVisible(true);
    localStorage.setItem("total-tasks", tasks.length);
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item !== currentTask))
    );
    setTotalTasks(tasks.length);
  }

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
                tasks={tasks}
                setDescs={setDescs}
                descs={descs}
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
          <div className="tasks-container">
            {tasks.map((item, idx) => {
              return (
                <UserTask
                  setCurrentDescription={setCurrentDescription}
                  setCurrentTask={setCurrentTask}
                  isFocusMode={isFocusMode}
                  setIsFocusMode={setIsFocusMode}
                  completedTasks={completedTasks}
                  setCompletedTasks={setCompletedTasks}
                  key={idx}
                  task={item}
                  setTasks={setTasks}
                  setDescs={setDescs}
                  tasks={tasks}
                  descs={descs}
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
