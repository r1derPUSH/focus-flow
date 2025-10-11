import Register from "./Register";
import CompletedTasks from "./CompletedTasks";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/completed" element={<CompletedTasks />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
