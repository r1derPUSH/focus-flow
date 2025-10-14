import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedTaskComponent from "./CompletedTaskComponent";

function CompletedTasks({ tasks }) {
  const navigate = useNavigate();

  const handleRouterBack = () => {
    navigate("/");
  };

  const clearData = () => {
    localStorage.removeItem("finished-tasks");
  };

  return (
    <>
      <div className="header-name">
        <span className="header-span">Completed Tasks</span>
      </div>
      <ul>
        {tasks
          ? tasks.map((task) => (
              <CompletedTaskComponent
                key={Math.random()}
                task={task}
                desc={localStorage.getItem(task)}
              />
            ))
          : "Here will be your tasks"}
      </ul>
      <div className="btns-container">
        <button className="finished-page" onClick={handleRouterBack}>
          Back to home
        </button>
        <button onClick={clearData} className="clearDataBase">
          Clear Data
        </button>
      </div>
    </>
  );
}

export default CompletedTasks;
