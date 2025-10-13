import React from "react";

function CompletedTaskComponent({ task, desc }) {
  return (
    <div>
      {task} : {desc}
    </div>
  );
}

export default CompletedTaskComponent;
