import { useState } from "react";

function UserDescriptionOfTask() {
  const [taskValue, setTaskValue] = useState("");
  const [task, setTask] = useState("");
  const [descValue, setDescValue] = useState("");
  const [desc, setDesc] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  const handleCreate = () => {
    setTask(taskValue);
    setDesc(descValue);
  };

  const handleChangeTask = (e) => {
    setTaskValue(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDescValue(e.target.value);
  };

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

export default UserDescriptionOfTask;
