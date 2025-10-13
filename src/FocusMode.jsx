import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function FocusMode({ currentTask, setIsFocusMode, tasks, setTasks }) {
  // localStorage.setItem("finished-tasks", "[]");

  console.log(currentTask);
  const [workTime, setWorkTime] = useState("");
  const [breakTime, setBreakTime] = useState("");

  const [mode, setMode] = useState("Focus :");
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

  const handleBreak = () => {
    handleStart();
    setTimeLeft(breakTime * 60);
    setMode("Break :");
  };

  const handleFocus = () => {
    handleStart();
    setTimeLeft(workTime * 60);
    setMode("Focus :");
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleFinish = () => {
    setMode("Focus :");
    setIsTimeOfWorkAndBreak(!isTimeOfWorkAndBreak);
    setIsRunning(false);
    setTimeLeft(0);
    setWorkTime("");
    setBreakTime("");
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const setWorkAndBreakTime = () => {
    setIsTimeOfWorkAndBreak(true);
    setTimeLeft(workTime * 60);
  };

  const backToTasks = () => {
    setIsFocusMode(false);
    setIsRunning(false);
  };

  const finishTask = () => {
    const arr = JSON.parse(localStorage.getItem("finished-tasks") || "[]");

    arr.push(currentTask);

    localStorage.setItem("finished-tasks", JSON.stringify(arr));

    // # 2

    const currentDesc = localStorage.getItem(currentTask);

    const arr2 = JSON.parse(localStorage.getItem("finished-descs") || "[]");

    arr2.push(currentDesc);

    localStorage.setItem("finished-descs", JSON.stringify(arr2));

    // * end local section
    setIsTimeOfWorkAndBreak(!isTimeOfWorkAndBreak);
    setIsRunning(false);
    setTimeLeft(0);
    setWorkTime("");
    setBreakTime("");
    setIsFocusMode(false);
    localStorage.setItem(
      "task-name",
      JSON.stringify(tasks.filter((item) => item != currentTask))
    );
    setTasks(tasks.filter((item) => item != currentTask));
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
      <div className="centerTaskName">
        <div className="focusMode-task-container">
          <span className="focusMode-task-name">{currentTask}</span>
          <span className="focusMode-task-description">
            {localStorage.getItem(currentTask)}
          </span>
        </div>
      </div>
      <div className="flex-flexes">
        <div className="centerFlex">
          <div className="flex-focus-1">
            <div className="focusMode-pomodoro-timer">
              <div className="focusMode-pomodoro-btns">
                <div
                  className={
                    isTimeOfWorkAndBreak ? "btns-showing" : "btns-notShowing"
                  }
                >
                  {!isRunning ? (
                    <button
                      className="start-btn-focusMode"
                      onClick={handleStart}
                    >
                      Start
                    </button>
                  ) : (
                    ""
                  )}
                  <button className="pause-btn-focusMode" onClick={handleStop}>
                    Pause
                  </button>
                  <button
                    className="reset-btn-focusMode"
                    onClick={handleFinish}
                  >
                    Reset
                  </button>
                  <button onClick={handleBreak} className="break-btn-focusMode">
                    Break
                  </button>
                  <button onClick={handleFocus} className="focus-btn-focusMode">
                    Focus
                  </button>
                </div>
                <div
                  className={
                    !isTimeOfWorkAndBreak
                      ? "inputs-showing"
                      : "inputs-notShowing"
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
                  <div className="flex-setTime-btn">
                    <button
                      className="set-time-focusMode"
                      onClick={setWorkAndBreakTime}
                    >
                      Set Time
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-tips-and-timer">
              <div className="flex-focus-2">
                <div className="focusMode-timer-span">
                  <span className="timer">
                    {mode} {formatTime(minutes)}:{formatTime(seconds)}
                  </span>
                </div>
                <div className="finishTask-focusMode-section">
                  <button
                    className="backHome-focusMode-btn"
                    onClick={backToTasks}
                  >
                    Go Back
                  </button>
                  <button
                    className="finishTask-focusMode-btn"
                    onClick={finishTask}
                  >
                    Finish
                  </button>
                </div>
              </div>
              <div className="footerSection-focusMode">
                <div className="focusMode-tips">
                  <span>
                    <b>🎯 Single-task:</b> Focus on one task at a time.
                  </span>
                  <span>
                    <b> ⏱️ Set a timer: </b> Work in 25–50 min sessions with
                    short breaks.
                  </span>
                  <span>
                    <b>💬 Use AI: </b> Type your current task into ChatGPT or a
                    neural tool to get clarity or ideas.
                  </span>
                  <span>
                    <b>✅ Mini goals: </b> Break tasks into small, achievable
                    steps.
                  </span>
                  <span>
                    <b> 🚶 Move often: </b> Take short stretches or walks during
                    breaks.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FocusMode;
