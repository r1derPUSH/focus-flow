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
      <button onClick={handleRouterBack}>Back to home</button>
    </>
  );
}

export default CompletedTasks;
