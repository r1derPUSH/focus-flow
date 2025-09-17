import { useState } from "react";

function UserDescriptionOfTask() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("");
  return (
    <div className="user-description-of-task-container">
      <input className="input-uDesc" type="text" placeholder="Task" />
      <input className="input-uDesc" type="text" placeholder="Description" />
      <div className="dropbox-bar">
        <button className="create-task-button">Create</button>
      </div>
    </div>
  );
}

export default UserDescriptionOfTask;
