import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout, Home, About, Blog, Contact, Project } from "./pages";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

  );
};

export default App;
