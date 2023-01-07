import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Projects from "./pages/projects.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/projects" element={<Projects />} />
  //         <Route path="/contact" element={<Contact />} />
  //       </Routes>
  //     </Router>
  //   </>
  // );
}

export default App;
