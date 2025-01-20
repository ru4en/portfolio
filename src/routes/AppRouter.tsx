import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import CV from "../components/CV/CV";
import Admin from "../components/Admin/Admin";
import AboutMe from "../components/About Me/AboutMe";
import Blog from "../components/Blog/Blog";
import BlogPost from "../components/Blog/BlogPost";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects/Projects";

function AppRouter() {
  return (
    <HashRouter> {/* Use HashRouter for GitHub Pages compatibility */}
      <div>
        {/* <Bugger /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default AppRouter;
