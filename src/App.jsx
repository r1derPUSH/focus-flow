import Register from "./components/Register/Register";
import CompletedTasks from "./components/completed-tasks/CompletedTasks";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import { routes } from "./constants/routes/routes";

function App() {
  const [isHandleEffect, setIsHandleEffect] = useState(false);
  const [finishedTasks, setFinishedTasks] = useState([]);
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
    setFinishedTasks(JSON.parse(localStorage.getItem("finished-tasks")));
  }, [isHandleEffect]);

  return (
    <HashRouter>
      <Routes>
        {isRegisteredLC == "false" ? (
          <Route path={routes.home} element={<Register />}></Route>
        ) : (
          <Route path={routes.home} element={<MainContent />}></Route>
        )}
        <Route
          path={routes.completed}
          element={
            <CompletedTasks
              setIsHandleEffect={setIsHandleEffect}
              tasks={finishedTasks}
              isHandleEffect={isHandleEffect}
            />
          }
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
