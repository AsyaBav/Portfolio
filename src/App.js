import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeCard/HomeCard";
import About from "./components/AboutCard/AboutCard";
import Projects from "./components/ProjectsCard/ProjectsCard";
import Blog from "./components/BlogCard/BlogCard";
import Contact from "./components/ContactCard/ContactCard";
import "./App.css";
import { Layout } from "./pages/layout/Layout";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

  );
};

export default App;
