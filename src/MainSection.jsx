import DailyTasks from "./DailyTasks";
import Greeting from "./Greeting";
import ProgressBar from "./ProgressBar";

function MainSection({ name, surname }) {
  return (
    <>
      <Greeting name={name} surname={surname} />
      <ProgressBar />
      <DailyTasks />
    </>
  );
}

export default MainSection;
