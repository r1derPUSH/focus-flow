import React, { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";

const Greeting = ({ name, surname }) => {
  const [time, setTime] = useState(new Date());
  const hour = getTime();
  const [timeOfDay, setTimeOfDay] = useState(() => {
    return hour >= 6 && hour <= 12
      ? "Morning"
      : hour >= 12 && hour <= 18
      ? "Afternoon"
      : hour >= 18 && hour <= 24
      ? "Evening"
      : "Night";
  });

  useEffect(() => {
    setTime(new Date());
    document.body.style.backgroundColor = "#1f1f1f";
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTime() {
    const hours = time.getHours();
    return hours;
  }

  return (
    <div className="flex-bar">
      <div className="greeting-div">
        <span className="greeting-text">
          {timeOfDay}, {name}
        </span>
        <DigitalClock />
      </div>
    </div>
  );
};

export default Greeting;
