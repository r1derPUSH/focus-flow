import { useEffect, useState } from "react";

function ProgressBar({ totalTasks }) {
  const [completedTasks, setCompletedTasks] = useState(
    Number(localStorage.getItem("completed-tasks"))
  );
  const avg = (completedTasks / totalTasks) * 100;
  console.log(avg);

  useEffect(() => {
    console.log(totalTasks);
  }, [totalTasks]);

  const arrOfTasksLn = localStorage.getItem("task-name");
  console.log(arrOfTasksLn);
  const [tasks, setTasks] = useState([]);
  const [progressBarValue, setProgressBarValue] = useState(avg);

  //   const completedTasks =

  return (
    <section className="progress-bar-section">
      <div className="progressBar">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressBarValue}%` }}
          ></div>
        </div>
        <div className="progress-label">{progressBarValue}% </div>
      </div>
    </section>
  );
}

export default ProgressBar;
