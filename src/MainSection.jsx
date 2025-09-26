import DailyTasks from "./DailyTasks";
import Greeting from "./Greeting";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function MainSection({ name, surname }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  return (
    <>
      <Greeting name={name} surname={surname} />
      <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} />
      <DailyTasks
        setTotalTasks={setTotalTasks}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        totalTasks={totalTasks}
      />
    </>
  );
}

export default MainSection;
