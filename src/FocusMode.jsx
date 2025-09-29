import React, { useEffect, useState } from "react";

function FocusMode() {
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const [mode, setMode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeOfWorkAndBreak, setIsTimeOfWorkAndBreak] = useState(false);

  const handleWorkTimeChange = (e) => {
    setWorkTime(e.target.value);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleFinish = () => {
    setTimeLeft(breakTime);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const setWorkAndBreakTime = () => {
    setTimeLeft(workTime * 60);
    setIsTimeOfWorkAndBreak(true);
    setWorkTime("");
  };

  function formatTime(val) {
    const minutes = Math.floor(val / 60);
    const seconds = val % 60;

    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    console.log(timeLeft);
  });

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleStop();
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
          <div
            className={
              isTimeOfWorkAndBreak ? "btns-showing" : "btns-notShowing"
            }
          >
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleStop}>Reset</button>
          </div>
          <div
            className={
              !isTimeOfWorkAndBreak ? "inputs-showing" : "inputs-notShowing"
            }
          >
            <input
              value={workTime}
              onChange={handleWorkTimeChange}
              type="number"
              placeholder="Set work time in minutes"
            />
            <input type="text" placeholder="Set break time in minutes" />
            <button onClick={setWorkAndBreakTime}>Set Time</button>
          </div>
        </div>
        <div className="focusMode-timer-span">{formatTime()}</div>
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
