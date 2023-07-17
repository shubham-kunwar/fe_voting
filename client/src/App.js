import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import HomePage from "./components/HomePage/HomePage";
import Vote from "./components/Vote/Vote";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./services/api"
import axios from 'axios';
import {Toaster} from "react-hot-toast"
import { UserContextProvider } from "./context/userContext";

axios.defaults.baseURL="http://localhost:4000"
axios.defaults.withCredentials = true;
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <UserContextProvider>

    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Toaster
  position="bottom-right"
  reverseOrder={false}/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </div>
    </Router>
    //</UserContextProvider>

  );
}

export default App;
