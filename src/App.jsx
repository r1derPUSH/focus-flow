import Register from "./Register";
import CompletedTasks from "./CompletedTasks";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";

function App() {
  const finishedTasks = localStorage.getItem("finished-tasks");
  const LC = localStorage.getItem("isRegistered");
  if (!LC) {
    localStorage.setItem("isRegistered", false);
  }
  const [isRegisteredLC, setIsRegisteredLC] = useState(() => {
    const isRegisteredLocalStorage = localStorage.getItem("isRegistered");
    return isRegisteredLocalStorage;
  });

  useEffect(() => {
    setIsRegisteredLC(localStorage.getItem("isRegistered"));
  });

  console.log(isRegisteredLC);

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
          element={<CompletedTasks finishedTasks={finishedTasks} />}
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
