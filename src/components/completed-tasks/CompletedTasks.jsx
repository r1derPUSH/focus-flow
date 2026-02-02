import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompletedTaskComponent from "../completed-tasks-component/CompletedTaskComponent";

import "./CompletedTasks.css";

function CompletedTasks({ tasks, isHandleEffect, setIsHandleEffect }) {
  const navigate = useNavigate();

  const handleRouterBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setIsHandleEffect(!isHandleEffect);
  }, []);

  const handleClearData = () => {
    localStorage.removeItem("finished-tasks");
    localStorage.removeItem("finished-descs");
    setIsHandleEffect(!isHandleEffect);
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
                isHandleEffect={isHandleEffect}
                setIsHandleEffect={setIsHandleEffect}
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
        <button onClick={handleClearData} className="clearDataBase">
          Clear Data
        </button>
      </div>
    </>
  );
}

export default CompletedTasks;
