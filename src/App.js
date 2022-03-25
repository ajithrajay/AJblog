import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trail1 from "./Components/Trail1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trail1" element={<Trail1 />} />
      </Routes>
    </Router>
  );
}

export default App;
