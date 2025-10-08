import DailyTasks from "./DailyTasks";
import Greeting from "./Greeting";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function MainSection({ name, surname }) {
  const [tasks, setTasks] = useState([]);
  const [tasksFinish, setTasksFinish] = useState();
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
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
        setCurrentDescription={setCurrentDescription}
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
