import Register from "./Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompletedTasks from "./CompletedTasks";

function App() {
  return (
    <Router basename="/react-project">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/completed" element={<CompletedTasks />}></Route>
      </Routes>
    </Router>
    // <>
    //   <Register />
    //   <CompletedTasks />
    // </>
  );
}

export default App;
