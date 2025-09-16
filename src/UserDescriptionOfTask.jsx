import { useState } from "react";

function UserDescriptionOfTask() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("");
  return (
    <div className="user-description-of-task-container">
      <input type="text" />
      <input type="text" />
      <div className="dropbox-bar">
        <span>easy</span>
      </div>
    </div>
  );
}

export default UserDescriptionOfTask;
