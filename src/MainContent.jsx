import React from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const MainContent = ({ name, surname }) => {

  

  return (
    <section className="body-section">
      <Header name={name} surname={surname} />
      <ProgressBar />
      
    </section>
  );
};

export default MainContent;
