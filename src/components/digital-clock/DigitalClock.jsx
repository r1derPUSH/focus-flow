import { useState, useEffect } from "react";
import "./DigitalClock.css";
import { formatTime } from "../../utils/utils";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <span className="clock">{formatTime(time)}</span>
    </>
  );
}

export default DigitalClock;
