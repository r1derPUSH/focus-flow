import DailyTasks from "./DailyTasks";
import Greeting from "./Greeting";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function MainSection({ name, surname }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  return (
    <>
      <Greeting name={name} surname={surname} />
      <ProgressBar
        currentTask={currentTask}
        isFocusMode={isFocusMode}
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
      />
    </>
  );
}

export default MainSection;
