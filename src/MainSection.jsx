import Greeting from "./Greeting";
import ProgressBar from "./ProgressBar";

function MainSection({ name, surname }) {
  return (
    <>
      <Greeting name={name} surname={surname} />
      <ProgressBar />
    </>
  );
}

export default MainSection;
