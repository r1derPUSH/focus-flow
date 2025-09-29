import { useEffect, useState } from "react";
import FocusMode from "./FocusMode";

function ProgressBar({ totalTasks, completedTasks, isFocusMode }) {
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

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
        <FocusMode />
      </div>
    </section>
  );
}

export default ProgressBar;
