import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedTaskComponent from "./CompletedTaskComponent";

function CompletedTasks({ tasks }) {
  const navigate = useNavigate();

  const handleRouterBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>Completed Tasks</div>
      <ul>
        {tasks.map((task) => (
          <CompletedTaskComponent
            key={Math.random()}
            task={task}
            desc={localStorage.getItem(task)}
          />
        ))}
      </ul>
      <div className="btns-container">
        <button className="finished-page" onClick={handleRouterBack}>
          Back to home
        </button>
        <button className="clearDataBase">Clear Data</button>
      </div>
    </>
  );
}

export default CompletedTasks;
