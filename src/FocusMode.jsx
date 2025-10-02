import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function FocusMode({ currentTask }) {
  const [workTime, setWorkTime] = useState("");
  const [breakTime, setBreakTime] = useState(0);

  const [mode, setMode] = useState("");
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeOfWorkAndBreak, setIsTimeOfWorkAndBreak] = useState(false);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const handleWorkTimeChange = (e) => {
    setWorkTime(e.target.value);
  };

  const handleStart = () => {
    setIsRunning(true);
    setMode("focus");
  };

  const handleFinish = () => {
    setIsTimeOfWorkAndBreak(!isTimeOfWorkAndBreak);
    setIsRunning(false);
    setTimeLeft(0);
    setMode("");
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const setWorkAndBreakTime = () => {
    setIsTimeOfWorkAndBreak(true);
    setTimeLeft(workTime * 60);
  };

  function formatTime(str) {
    if (str >= 10) {
      return str;
    }
    return `0${str}`;
  }

  // function formatTime(val) {
  //   const minutes = Math.floor(val / 60);
  //   const seconds = (val * 60) % 60;

  //   return `${minutes}:${seconds}`;
  // }

  useEffect(() => {
    // console.log(`Work time: ${workTime}`);
    console.log(timeLeft);
    console.log(minutes);
    console.log(seconds);
  });

  useEffect(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [timeLeft]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      // if (workTime != 0) {
      // }
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
        <span className="focusMode-task-name">{currentTask}</span>
        <span className="focusMode-task-description">
          {localStorage.getItem(currentTask)}
        </span>
      </div>
      <div className="focusMode-pomodoro-timer">
        <div className="focusMode-pomodoro-btns">
          <div
            className={
              isTimeOfWorkAndBreak ? "btns-showing" : "btns-notShowing"
            }
          >
            <button className="start-btn-focusMode" onClick={handleStart}>
              Start
            </button>
            <button className="pause-btn-focusMode" onClick={handleStop}>
              Pause
            </button>
            <button className="reset-btn-focusMode" onClick={handleFinish}>
              Reset
            </button>
          </div>
          <div
            className={
              !isTimeOfWorkAndBreak ? "inputs-showing" : "inputs-notShowing"
            }
          >
            <input
              min={0}
              max={60}
              value={workTime}
              onChange={handleWorkTimeChange}
              type="number"
              placeholder="Set work time in minutes"
            />
            <input type="text" placeholder="Set break time in minutes" />
            <button
              className="set-time-focusMode"
              onClick={setWorkAndBreakTime}
            >
              Set Time
            </button>
          </div>
        </div>
        <div className="focusMode-timer-span">
          {mode === "focus" ? (
            <span>
              Focus: {formatTime(minutes)}:{formatTime(seconds)}{" "}
            </span>
          ) : (
            <span>{mode} 00:00</span>
          )}
        </div>
      </div>
      <div className="focusMode-tips">
        <span>Single-task: Focus on one task at a time.</span>
        <span>Set a timer: Work in 25–50 min sessions with short breaks.</span>
        <span>
          Clear distractions: Silence notifications and close unnecessary tabs.
        </span>
        <span>Mini goals: Break tasks into small, achievable steps.</span>
        <span>Move often: Take short stretches or walks during breaks.</span>
      </div>
    </>
  );
}

export default FocusMode;
