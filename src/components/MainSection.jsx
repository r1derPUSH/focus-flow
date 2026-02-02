import DailyTasks from "./daily-tasks/DailyTasks";
import Greeting from "./Greeting/Greeting";
import ProgressBar from "./progress-bar/ProgressBar";
import { useState } from "react";

function MainSection({ name, surname }) {
  const localStorageTasksArr = JSON.parse(localStorage.getItem("task-name"));
  const [tasks, setTasks] = useState(() => {
    const arr = localStorageTasksArr ? localStorageTasksArr : [];
    return arr;
  });
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  return (
    <>
      <Greeting name={name} surname={surname} />
      <ProgressBar
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        isFocusMode={isFocusMode}
        setIsFocusMode={setIsFocusMode}
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />
      <DailyTasks
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        isFocusMode={isFocusMode}
        setIsFocusMode={setIsFocusMode}
        setTotalTasks={setTotalTasks}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        totalTasks={totalTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}

export default MainSection;
