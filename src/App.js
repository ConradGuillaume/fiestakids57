import "./style/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipe" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
