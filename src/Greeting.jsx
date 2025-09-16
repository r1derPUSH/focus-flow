import React, { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";

const Greeting = ({ name, surname }) => {
  const [timeOfDay, setTimeOfDay] = useState("Morning");

  useEffect(() => {
    document.body.style.backgroundColor = "#1f1f1f";
  }, []);

  return (
    <div className="greeting-div">
      <span className="greeting-text">
        Good {timeOfDay}, {name}
      </span>
      <span>
        <DigitalClock />
      </span>
    </div>
  );
};

export default Greeting;
