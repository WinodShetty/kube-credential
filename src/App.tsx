import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IssuancePage from "./pages/IssuancePage";
import VerificationPage from "./pages/VerificationPage";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IssuancePage />} />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
