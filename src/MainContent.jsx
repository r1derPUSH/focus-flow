import React from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import DigitalClock from "./DigitalClock";
import Greeting from "./Greeting";
import MainSection from "./MainSection";

const MainContent = ({ name, surname }) => {
  return (
    <section className="body-section">
      <Header name={name} surname={surname} />
      <MainSection name={name} surname={surname} />
    </section>
  );
};

export default MainContent;
