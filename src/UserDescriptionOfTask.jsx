import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function UserDescriptionOfTask({ isVisible, setIsVisible, setTasks }) {
  const localStorageTasksArr = JSON.parse(localStorage.getItem("task-name"));
  const [taskValue, setTaskValue] = useState("");
  const [task, setTask] = useState([]);
  const [descValue, setDescValue] = useState("");
  const [desc, setDesc] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleCreate() {
    const tasks = [...task, taskValue];
    const descs = [...desc, descValue];
    // const
    // setDesc(...desc, descValue);
    setTask(tasks);
    setDesc(descs);
    setTasks((prev) => [...prev, taskValue]);
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
    await wait(100);
    setTaskValue("");
    setDescValue("");
    setIsVisible(false);
  }

  const handleChangeTask = (e) => {
    setTaskValue(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDescValue(e.target.value);
  };

  if (isVisible) {
    return (
      <motion.div
        className="user-description-of-task-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }} // плавне зникнення
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
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
      </motion.div>
    );
  }
  if (!isVisible) {
    return <></>;
  }
}

export default UserDescriptionOfTask;
