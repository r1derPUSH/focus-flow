import { useState } from "react";

function UserDescriptionOfTask({ isVisible, setIsVisible }) {
  const [taskValue, setTaskValue] = useState("");
  const [task, setTask] = useState([]);
  const [descValue, setDescValue] = useState("");
  const [desc, setDesc] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  const handleCreate = () => {
    const tasks = [...task, taskValue];
    const descs = [...desc, descValue];
    // const
    // setDesc(...desc, descValue);
    setTask(tasks);
    setDesc(descs);
    localStorage.setItem(
      "task-name",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("task-name")) || []),
        tasks,
      ])
    );
    localStorage.setItem(
      "task-description",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("task-description")) || []),
        descs,
      ])
    );
    setTaskValue("");
    setDescValue("");
    setIsVisible(false);
  };

  const handleChangeTask = (e) => {
    setTaskValue(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDescValue(e.target.value);
  };

  if (isVisible) {
    return (
      <div className="user-description-of-task-container">
        <input
          className="input-uDesc"
          value={taskValue}
          type="text"
          onChange={handleChangeTask}
          placeholder="Task"
        />
        <input
          className="input-uDesc"
          value={descValue}
          type="text"
          onChange={handleChangeDesc}
          placeholder="Description"
        />
        <div className="dropbox-bar">
          <button className="create-task-button" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
  if (!isVisible) {
    return <></>;
  }
}

export default UserDescriptionOfTask;
