import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ProjectsPage from "./Project/ProjectsPage";
import ProjectDetailPage from "./ProjectDetail/ProjectDetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Router>

      {/* <button class="ui button">Click Here</button> */}
    </div>
  );
}

export default App;
