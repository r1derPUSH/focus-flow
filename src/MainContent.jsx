import React from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import DigitalClock from "./DigitalClock";

const MainContent = ({ name, surname }) => {
  return (
    <section className="body-section">
      <Header name={name} surname={surname} />
      <ProgressBar />
      <DigitalClock />
    </section>
  );
};

export default MainContent;
