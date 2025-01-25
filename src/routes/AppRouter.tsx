import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

function PageTransitionWrapper() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

function AppRouter() {
  return (
    <HashRouter>
      <PageTransitionWrapper />
    </HashRouter>
  );
}

export default AppRouter;
