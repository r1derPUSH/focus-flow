import Register from "./Register";
import CompletedTasks from "./CompletedTasks";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";

function App() {
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
        <Route path="/completed" element={<CompletedTasks />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
