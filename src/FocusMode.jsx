import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function FocusMode({ currentTask, setIsFocusMode }) {
  const [workTime, setWorkTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [isBreakTime, setIsBreakTime] = useState(false);

  const [mode, setMode] = useState("");
  const [hide, setHide] = useState(false);
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeOfWorkAndBreak, setIsTimeOfWorkAndBreak] = useState(false);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const handleWorkTimeChange = (e) => {
    setWorkTime(e.target.value);
  };

  const handleBreakTimeChange = (e) => {
    setBreakTime(e.target.value);
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
    setWorkTime("");
    setBreakTime("");
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const setWorkAndBreakTime = () => {
    setIsTimeOfWorkAndBreak(true);
    if (!isBreakTime) {
      setTimeLeft(workTime * 60);
      setMode("focus");
    }
    if (isBreakTime) {
      setTimeLeft(breakTime * 60);
      setMode("break");
    }
  };

  const backToTasks = () => {
    setIsFocusMode(false);
  };

  const finishTask = () => {};

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
    if (!isBreakTime) {
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      setMinutes(mins);
      setSeconds(secs);
    }
    if (isBreakTime) {
      handleStart();
      // setWorkAndBreakTime();
      const mins = Math.floor(timeLeft);
      const secs = (timeLeft * 60) % 60;
      setMinutes(mins);
      setSeconds(secs);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    console.log(`should work`);
    const interval = setInterval(() => {
      // if (workTime != 0) {
      // }
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsBreakTime(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!isBreakTime) {
      return;
    }
    console.log(`should work now`);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleStop();
          setIsBreakTime(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreakTime]);

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
            {!isRunning ? (
              <button className="start-btn-focusMode" onClick={handleStart}>
                Start
              </button>
            ) : (
              ""
            )}
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
              placeholder="Work Time in Minutes"
            />
            <input
              min={0}
              max={60}
              value={breakTime}
              onChange={handleBreakTimeChange}
              type="number"
              placeholder="Break Time in Minutes"
            />
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
            <span className="timer">
              Focus: {formatTime(minutes)}:{formatTime(seconds)}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="focusMode-timer-break-span">
          {mode === "break" ? (
            <span className="break-timer">
              Break: {formatTime(minutes)}:{formatTime(seconds)}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="footerSection-focusMode">
        <div className="focusMode-tips">
          <span>Single-task: Focus on one task at a time.</span>
          <span>
            Set a timer: Work in 25–50 min sessions with short breaks.
          </span>
          <span>
            Clear distractions: Silence notifications and close unnecessary
            tabs.
          </span>
          <span>Mini goals: Break tasks into small, achievable steps.</span>
          <span>Move often: Take short stretches or walks during breaks.</span>
        </div>
        <div className="finishTask-focusMode-section">
          <button className="backHome-focusMode-btn" onClick={backToTasks}>
            Go Back
          </button>
          <button className="finishTask-focusMode-btn" onClick={finishTask}>
            Finish
          </button>
        </div>
      </div>
    </>
  );
}

export default FocusMode;
