
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

import CV from "../components/CV/CV";
import Admin from "../components/Admin/Admin";
import AboutMe from "../components/About Me/AboutMe";
import Blog from "../components/Blog/Blog";


function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
