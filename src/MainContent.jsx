import Header from "./Header/Header";
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
