import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Navbar from "../components/Nav/Navbar";
import Home from "../components/Home/Home";

import CV from "../components/CV/CV";

function About() {
  return <h2>About</h2>;
}


function Blog() {
  return <h2>Blog</h2>;
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
