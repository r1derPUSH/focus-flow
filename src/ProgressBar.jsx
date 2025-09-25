import { useState } from "react";

function ProgressBar() {
  const arrOfTasksLn = localStorage.getItem("task-name");
  console.log(arrOfTasksLn);
  const [tasks, setTasks] = useState([]);
  const [progressBarValue, setProgressBarValue] = useState(arrOfTasksLn.length);
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
        <div className="progress-label">50% </div>
      </div>
    </section>
  );
}

export default ProgressBar;
