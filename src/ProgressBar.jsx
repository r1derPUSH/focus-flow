import FocusMode from "./FocusMode";

function ProgressBar({
  isFocusMode,
  setIsFocusMode,
  currentTask,
  tasks,
  setTasks,
}) {
  return (
    <section
      className={
        !isFocusMode
          ? "progress-bar-section"
          : "progress-bar-section-focusModeActivated"
      }
    >
      <div
        className={
          !isFocusMode
            ? "focusMode-center-quote"
            : "focusMode-center-quote-activated"
        }
      >
        <span className="typewriter">Focus. Flow. Grow.</span>
      </div>
      <div
        className={!isFocusMode ? "focusMode-box-disabled" : "focusMode-box"}
      >
        <FocusMode
          setTasks={setTasks}
          tasks={tasks}
          currentTask={currentTask}
          setIsFocusMode={setIsFocusMode}
        />
      </div>
    </section>
  );
}

export default ProgressBar;
