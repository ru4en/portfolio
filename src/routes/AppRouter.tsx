import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import CV from "../components/CV/CV";
import Admin from "../components/Admin/Admin";
import AboutMe from "../components/About Me/AboutMe";
import Blog from "../components/Blog/Blog";
import BlogPost from "../components/Blog/BlogPost";
import NotFound from "../components/Common/NotFound/NotFound";
import Projects from "../components/Projects/Projects";
import Spinner from "../components/Common/Spinner";


const PageTransitionWrapper = ({ children, location }: { children: React.ReactNode; location: any }) => {
  const nodeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Small delay to show spinner briefly

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        timeout={300}
        classNames="page"
      >
        <div ref={nodeRef}>{isLoading ? <Spinner /> : children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

// Create a separate component that uses useLocation inside the Router context
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageTransitionWrapper location={location}>
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
      </PageTransitionWrapper>
      <Footer />
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;
