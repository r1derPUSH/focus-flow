import React from "react";

function FocusMode() {
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
