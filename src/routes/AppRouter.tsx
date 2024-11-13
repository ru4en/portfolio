
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

import CV from "../components/CV/CV";
import Admin from "../components/Admin/Admin";
import AboutMe from "../components/About Me/AboutMe";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound";
// import Bugger from "../lib/Bugger";


function AppRouter() {
  return (
    <Router>
      <div>
        {/* <Bugger /> */}
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
