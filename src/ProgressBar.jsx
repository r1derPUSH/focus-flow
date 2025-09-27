import { useEffect, useState } from "react";

function ProgressBar({ totalTasks, completedTasks, isFocusMode }) {
  const avg = (completedTasks / totalTasks) * 100;
  console.log(completedTasks);
  console.log(totalTasks);
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
    <section
      className={
        isFocusMode
          ? "progress-bar-section"
          : "progress-bar-section-focusModeActivated"
      }
    >
      <div className="progressBar">
        {/* <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressBarValue}%` }}
          ></div>
        </div>
        <div className="progress-label">{progressBarValue}% </div> */}
      </div>
    </section>
  );
}

export default ProgressBar;
