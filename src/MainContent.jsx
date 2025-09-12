import React from "react";
import Header from "./Header";

const MainContent = ({ name, surname }) => {

  

  return (
    <section className="body-section">
      <Header name={name} surname={surname} />
    </section>
  );
};

export default MainContent;
