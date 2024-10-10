import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.tsx';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Contact from "./pages/Contact.tsx";
import HomePage from "./pages/HomePage.tsx";
import Features from "./pages/Features.tsx";
import ChatBot from "./components/ChatBot.tsx";
import AboutUS from "./pages/AboutUS.tsx";
import TrackCycle from "./pages/TrackCycle.tsx"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cycle" element={<TrackCycle />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
        <ChatBot/>
    </Router>
  </StrictMode>
);

export default Contact;