import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <header style={{background: "#0b5fff", color: "white"}} className="app-header">
      <div style={{maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px"}}>
        <div style={{fontWeight: 700, fontSize: 18}}>Kube Credential</div>
        <nav style={{display: "flex", gap: 12}}>
          <Link to="/" style={{color: loc.pathname === "/" ? "#fff" : "#dbe9ff", textDecoration: "none"}}>Issue</Link>
          <Link to="/verify" style={{color: loc.pathname === "/verify" ? "#fff" : "#dbe9ff", textDecoration: "none"}}>Verify</Link>
        </nav>
      </div>
    </header>
  );
}
