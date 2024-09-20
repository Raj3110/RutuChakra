import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.tsx';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
    </Router>
  </StrictMode>
);

export default App;