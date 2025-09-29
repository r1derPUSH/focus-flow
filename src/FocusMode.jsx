import React, { useEffect, useState } from "react";

function FocusMode() {
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const [mode, setMode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleEnd = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div className="focusMode-task-container">
        <span className="focusMode-task-name">Task 123</span>
        <span className="focusMode-task-description">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
      </div>
      <div className="focusMode-pomodoro-timer">
        <div className="focusMode-pomodoro-btns">
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
          <input type="text" placeholder="Set work time in minutes" />
          <input type="text" placeholder="Set break time in minutes" />
        </div>
        <div className="focusMode-timer-span">00:00</div>
      </div>
      <div className="focusMode-tips">
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ea
          placeat, laudantium dolor omnis similique.
        </span>
      </div>
    </>
  );
}

export default FocusMode;
