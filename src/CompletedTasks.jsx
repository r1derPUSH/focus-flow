import React from "react";
import { useNavigate } from "react-router-dom";

function CompletedTasks() {
  const navigate = useNavigate();

  const handleRouterBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>Completed Tasks</div>
      <button onClick={handleRouterBack}>Back to home</button>
    </>
  );
}

export default CompletedTasks;
