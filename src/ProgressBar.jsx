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

  //

  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  //   const completedTasks =

  return (
    <section
      className={
        !isFocusMode
          ? "progress-bar-section"
          : "progress-bar-section-focusModeActivated"
      }
    >
      <div
        className={!isFocusMode ? "focusMode-box-disabled" : "focusMode-box"}
      >
        <div className="focusMode-task-container">
          <span className="focusMode-task-name">Task 123</span>
          <span className="focusMode-task-description">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
        </div>
        <div className="focusMode-pomodoro-timer">
          <div className="focusMode-pomodoro-btns">
            <button>Start</button>
            <input type="text" placeholder="Set work time in minutes" />
            <input type="text" placeholder="Set break time in minutes" />
          </div>
        </div>
        <div className="focusMode-tips">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ea
            placeat, laudantium dolor omnis similique.
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
