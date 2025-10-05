import FocusMode from "./FocusMode";

function ProgressBar({
  totalTasks,
  completedTasks,
  isFocusMode,
  setIsFocusMode,
  currentTask,
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
        className={!isFocusMode ? "focusMode-box-disabled" : "focusMode-box"}
      >
        <FocusMode currentTask={currentTask} setIsFocusMode={setIsFocusMode} />
      </div>
    </section>
  );
}

export default ProgressBar;
