import Register from "./Register";
import CompletedTasks from "./CompletedTasks";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";

function App() {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [secs, setSecs] = useState(0);
  const LC = localStorage.getItem("isRegistered");
  if (!LC) {
    localStorage.setItem("isRegistered", false);
  }
  const [isRegisteredLC, setIsRegisteredLC] = useState(() => {
    const isRegisteredLocalStorage = localStorage.getItem("isRegistered");
    return isRegisteredLocalStorage;
  });

  const timer = setTimeout(() => {
    setSecs((prev) => prev + 1);
  }, 5000);

  useEffect(() => {
    setIsRegisteredLC(localStorage.getItem("isRegistered"));
    setFinishedTasks(JSON.parse(localStorage.getItem("finished-tasks")));
  }, [secs]);

  return (
    <HashRouter>
      <Routes>
        {isRegisteredLC == "false" ? (
          <Route path="/" element={<Register />}></Route>
        ) : (
          <Route path="/" element={<MainContent />}></Route>
        )}
        <Route
          path="/completed"
          element={<CompletedTasks tasks={finishedTasks} />}
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
