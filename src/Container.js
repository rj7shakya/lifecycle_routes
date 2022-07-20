import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

const Container = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/about/rjshk">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <Routes>
          <Route path="/about/:name" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Container;
