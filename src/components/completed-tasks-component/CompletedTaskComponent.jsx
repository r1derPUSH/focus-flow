import "./CompletedTasks.css";

function CompletedTaskComponent({
  task,
  desc,
  isHandleEffect,
  setIsHandleEffect,
}) {
  const handleClearTask = () => {
    // arr 1
    let arr1 = JSON.parse(localStorage.getItem("finished-tasks"));
    arr1 = arr1.filter((i) => i != task);
    localStorage.setItem("finished-tasks", JSON.stringify(arr1)) || [];
    // arr 2
    let arr2 = JSON.parse(localStorage.getItem("finished-descs"));
    arr2 = arr2.filter((i) => i != desc);
    localStorage.setItem("finished-descs", JSON.stringify(arr2)) || [];
    setIsHandleEffect(!isHandleEffect);
  };

  return (
    <div className="center-tasks">
      <div className="finished-task">
        <span>{task}</span> <span>{desc}</span>
        <button onClick={handleClearTask} className="clear-task-btn">
          Clear Task
        </button>
      </div>
    </div>
  );
}

export default CompletedTaskComponent;
