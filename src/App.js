import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import HomePage from "./components/HomePage/HomePage";
import Vote from "./components/Vote/Vote";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/dashboard/:email/:name" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
